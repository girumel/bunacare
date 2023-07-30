import datetime
import os

import cv2
import dateutil.parser
import joblib
import requests
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from skimage.io import imread
from skimage.transform import resize

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)
from models.Task import Task

api_key = os.getenv('OPENWEATHERMAP_API_KEY')
base_url = 'https://api.openweathermap.org/data/2.5/'

@app.route('/weather/current/<lat>/<lon>', methods=['GET'])
def get_weather_info(lat, lon):
    
    url = f'{base_url}/weather?lat={lat}&lon={lon}&appid={api_key}'
    response = requests.get(url)
    return response.json()

@app.route('/weather/forecast/daily/<lat>/<lon>', methods=['GET'])
def get_forecast_daily(lat, lon):
    url = f'{base_url}/forecast?lat={lat}&lon={lon}&appid={api_key}'
    response = requests.get(url)
    daily_forecast = []
    for forecast in response.json()['list']:
        daily_forecast.append({
            'date': forecast['dt_txt'].split(' ')[0],
            'forecast': forecast['weather'][0]['main'],
            'temperature': forecast['main']['temp'],
            'humidity': forecast['main']['humidity']
        })
    return daily_forecast[0]

@app.route('/weather/forecast/weekly/<lat>/<lon>', methods=['GET'])
def get_forecast_weekly(lat, lon):
    url = f'{base_url}/forecast?lat={lat}&lon={lon}&appid={api_key}'
    response = requests.get(url)
    weekly_forecast = []
    for forecast in response.json()['list']:
        if forecast['dt_txt'].split(' ')[1] != '12:00:00':
            continue
        weekly_forecast.append({
            'date': forecast['dt_txt'].split(' ')[0],
            'forecast': forecast['weather'][0]['main'],
            'temperature': forecast['main']['temp'],
            'humidity': forecast['main']['humidity']
        })
    return weekly_forecast

@app.route('/tasks/all', methods=['GET'])
def get_all_tasks():
    all_tasks = Task.query.all()
    all_tasks_formatted = [task.format() for task in all_tasks]
    todo_column = [task for task in all_tasks_formatted if task['status'] == 'todo']
    doing_column = [task for task in all_tasks_formatted if task['status'] == 'doing']
    done_columnn = [task for task in all_tasks_formatted if task['status'] == 'done']
    return {
        'toDoColumn': todo_column,
        'doingColumn': doing_column,
        'doneColumn': done_columnn
    }

@app.route('/tasks/current', methods=['GET'])
def get_current_tasks():
    current_tasks = Task.query.filter(Task.status == 'doing').all()
    current_tasks_formatted = [task.format() for task in current_tasks]
    return current_tasks_formatted

@app.route('/tasks', methods=['POST'])
def create_task():
    body = request.get_json()
    task = Task(
        status=body['status'],
        name=body['name'],
        description=body['description'],
        date=body['date']
    )
    task.insert()
    return task.format()

@app.route('/tasks/<task_id>', methods=['PATCH'])
def update_task(task_id):
    body = request.get_json()
    task = Task.query.filter(Task.id == task_id).one_or_none()
    if task is None:
        return 'Task not found', 404
    task.status = body['status']
    task.update()
    return task.format()

@app.route('/diagnosis/image-capture', methods=['GET'])
def capture_image():
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    timestamp = dateutil.parser.parse(datetime.datetime.now().isoformat())
    filename = f'{timestamp.strftime("%Y%m%d%H%M%S")}.jpg'
    cv2.imwrite(filename, frame)
    cap.release() 
    return predict_disease(filename)

@app.route('/diagnosis/image-upload', methods=['POST'])
def upload_image():
    file = request.files['file']
    timestamp = dateutil.parser.parse(datetime.datetime.now().isoformat())
    filename = f'{timestamp.strftime("%Y%m%d%H%M%S")}.jpg'
    file.save(filename)
    return predict_disease(filename)

def process_image(filename):
    width, height = 800, 400
    img_array = imread(filename)
    img_resized = resize(img_array, (width, height, 3))
    img_flattened = img_resized.flatten()
    img_reshaped = img_flattened.reshape(1, -1)
    return img_reshaped

def predict_disease(filename):
    img = process_image(filename)
    model = joblib.load('model.pkl')
    return model.predict(img)


if __name__ == '__main__':
    app.run()