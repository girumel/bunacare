import datetime
import os

import cv2
import dateutil.parser
import requests
import joblib
from flask import Flask, request
from skimage.io import imread
from skimage.transform import resize

app = Flask(__name__)
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