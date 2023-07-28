import React, { useState } from "react";

import axois from "axios";

import "./weather.css";

import search from "../../../Assets/images/search.png";
import cloud from "../../../Assets/images/clouds.png";
import humidity from "../../../Assets/images/humidity.png";
import wind from "../../../Assets/images/wind.png";
import Rain from "../../../Assets/images/rain.png";
import Drizzle from "../../../Assets/images/drizzle.png";
import Clear from "../../../Assets/images/clear.png";
import Mist from "../../../Assets/images/mist.png";

const Weather = () => {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    image: `${cloud}`,
  });

  const [name, setName] = useState("");

  const handleclick = () => {
    if (name !== "") {
      const apiUri = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6fb037235c5706d594f784b356c4e73b`;
      axois
        .get(apiUri)
        .then((res) => {
          let imagePath = ``;
          if (res.data.weather[0].main == "Clouds") {
            imagePath = `${cloud}`;
          } else if (res.data.weather[0].main == "Clear") {
            imagePath = `${Clear}`;
          } else if (res.data.weather[0].main == "Rain") {
            imagePath = `${Rain}`;
          } else if (res.data.weather[0].main == "Drizzle") {
            imagePath = `${Drizzle}`;
          } else if (res.data.weather[0].main == "Mist") {
            imagePath = `${Mist}`;
          } else {
            imagePath = `${cloud}`;
          }
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="weatherContainer">
      <div className="weather">
        <div className="search">
          <input
            className="inputField"
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" onClick={handleclick}>
            <img src={search} alt="" />
          </button>
        </div>
        <div className="weatherInfo">
          <img src={data.image} alt="" />
          <h2>{Math.round(data.celcius)} ℃</h2>
          <h2>{data.name}</h2>
          <div className="details">
            <div className="col">
              <img src={humidity} alt="" />
              <div className="humidity">
                <h2>{Math.round(data.humidity)} %</h2>
                <h2>humditiy</h2>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="" />
              <div className="wind">
                <h2>{Math.round(data.speed)}km/h</h2>
                <h2>wind speed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
