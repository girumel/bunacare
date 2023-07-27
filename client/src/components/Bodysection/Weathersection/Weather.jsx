import React, { useEffect, useState } from "react";

import axois from "axios";

import "./weather.css";

import search from "../../../Assets/images/search.png";
import cloud from "../../../Assets/images/clouds.png";
import humidity from "../../../Assets/images/humidity.png";
import wind from "../../../Assets/images/wind.png";

const Weather = () => {
  const [data, setdata] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
  });
  useEffect(() => {
    const apiUri =
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6fb037235c5706d594f784b356c4e73b";
    axois
      .get(apiUri)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="weatherContainer">
      <div className="weather">
        <div className="search">
          <input
            className="inputField"
            type="text"
            placeholder="Enter City Name"
          />
          <button className="btn">
            <img src={search} alt="" />
          </button>
        </div>
        <div className="weatherInfo">
          <img src={cloud} alt="" />
          <h2>22 ℃</h2>
          <h2>london</h2>
          <div className="details">
            <div className="col">
              <img src={humidity} alt="" />
              <div className="humidity">
                <h2>20%</h2>
                <h2>humditiy</h2>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="" />
              <div className="wind">
                <h2>2 km/h</h2>
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
