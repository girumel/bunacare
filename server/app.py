import datetime
import os

import cv2
import dateutil.parser
import requests
import joblib
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
from models.Crop import Crop

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

@app.route('/tasks/<task_id>', methods=['GET'])
def get_task(task_id):
    task = Task.query.filter(Task.id == task_id).one_or_none()
    if task is None:
        return 'Task not found', 404
    return task.format()

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = [task.format() for task in Task.query.all()]
    todo_column = [task for task in tasks if task['status'] == 'todo']
    doing_column = [task for task in tasks if task['status'] == 'doing']
    done_columnn = [task for task in tasks if task['status'] == 'done']
    return {
        'toDoColumn': todo_column,
        'doingColumn': doing_column,
        'doneColumn': done_columnn
    }

@app.route('/tasks/current', methods=['GET'])
def get_current_tasks():
    current_tasks= [task.name for task in Task.query.filter(Task.status == 'doing').all()]
    return {
        'currentTasks': current_tasks
    }
   

@app.route('/tasks/pending', methods=['GET'])
def get_pending_tasks():
    pending_tasks = [task.name for task in Task.query.filter(Task.status == 'todo').all()]
    return {
        'pendingTasks': pending_tasks
    }

@app.route('/tasks/completed', methods=['GET'])
def get_completed_tasks():
    completed_tasks = [task.name for task in Task.query.filter(Task.status == 'done').all()]
    return {
        'completedTasks': completed_tasks
    }

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

@app.route('/tasks/<task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = Task.query.filter(Task.id == task_id).one_or_none()
    if task is None:
        return 'Task not found', 404
    task.delete()
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

@app.route('/farm/summary', methods=['GET'])
def get_farm_summary():
    crops = Crop.query.all()
    total = len(crops)
    healthy = len([crop for crop in crops if crop.infected == False])
    infected = len([crop for crop in crops if crop.infected == True])
    infected_by_clr = len([crop for crop in crops if crop.infected == True and crop.infected_by == 1])
    infected_by_bes = len([crop for crop in crops if crop.infected == True and crop.infected_by == 2])
    return {
        'FarmSummary': {
            'total': total,
            'healthy': healthy,
            'infected': infected,
            'infectedByCLR': infected_by_clr,
            'infectedByBES': infected_by_bes
        }
    }

@app.route('/farm/infections', methods=['GET'])
def get_farm_infections():
    clr_infections = Crop.query.filter(Crop.infected == True, Crop.infected_by == 1).all()
    clr_total = len(clr_infections)
    clr_mild = len([crop for crop in clr_infections if crop.severity_level == 1])
    clr_moderate = len([crop for crop in clr_infections if crop.severity_level == 2])
    clr_severe = len([crop for crop in clr_infections if crop.severity_level == 3])
    bes_infections = Crop.query.filter(Crop.infected == True, Crop.infected_by == 2).all()
    bes_total = len(bes_infections)
    bes_mild = len([crop for crop in bes_infections if crop.severity_level == 1])
    bes_moderate = len([crop for crop in bes_infections if crop.severity_level == 2])
    bes_severe = len([crop for crop in bes_infections if crop.severity_level == 3])
    return {
        'FarmInfections': [
            {
                'infection': 'CLR',
                'total': clr_total,
                'mild': clr_mild,
                'moderate': clr_moderate,
                'severe': clr_severe
            },
            {
                'infection': 'BES',
                'total': bes_total,
                'mild': bes_mild,
                'moderate': bes_moderate,
                'severe': bes_severe
            }
        ]
    }


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