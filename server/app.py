import os
from flask import Flask
import requests

app = Flask(__name__)

@app.route('/weather/current/<float:lat>/<float:lon>', methods=['GET'])
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


if __name__ == '__main__':
    app.run()