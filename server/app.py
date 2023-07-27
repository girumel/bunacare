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

@app.route('/weather/current/<lat>/<lon>', methods=['GET'])
def get_weather(lat, lon):
    api_key = os.getenv('OPENWEATHERMAP_API_KEY')
    url = f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}'
    response = requests.get(url)
    return response.json()

@app.route('/weather/forecast/<lat>/<lon>', methods=['GET'])
def get_forecast(lat, lon):
    api_key = os.getenv('OPENWEATHERMAP_API_KEY')
    url = f'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={api_key}'
    response = requests.get(url)
    return response.json()

@app.route('/image/capture', methods=['POST'])
def capture_image():
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    timestamp = dateutil.parser.parse(datetime.datetime.now().isoformat())
    filename = f'{timestamp.strftime("%Y%m%d%H%M%S")}.jpg'
    cv2.imwrite(filename, frame)
    return predict_disease(filename)

@app.route('/image/upload', methods=['POST'])
def upload_image():
    file = request.files['file']
    timestamp = dateutil.parser.parse(datetime.datetime.now().isoformat())
    filename = f'{timestamp.strftime("%Y%m%d%H%M%S")}.jpg'
    file.save(filename)
    return predict_disease(filename)

def process_image(filename):
    img_array = imread(filename)
    img_resized = resize(img_array, (300, 300, 3))
    img_flattened = img_resized.flatten()
    img_reshaped = img_flattened.reshape(1, -1)
    return img_reshaped

def predict_disease(filename):
    img = process_image(filename)
    model = joblib.load('model.pkl')
    return model.predict(img)


if __name__ == '__main__':
    app.run()