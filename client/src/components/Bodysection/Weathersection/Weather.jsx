import React from "react";
import "./weather.css";
// importting icon
import CloudIcon from "@mui/icons-material/Cloud";
import Thunder from "@mui/icons-material/ThunderstormTwoTone";
import Sun from "@mui/icons-material/WbSunny";

const Weather = () => {
  return (
    <div className="weatherContanier">
      <div className="cloudicon">
        <Thunder className="cloud"/>
      </div>
      <div className="weatherFeed">
        <span className="weatherTitle">today's weather</span>
        <span className="date">monday</span>
        <div className="date_in_number">22 march 2023</div>
      </div>
      <div className="temprature">
        <div className="feed">
          <div className="sunicon">
            <Sun   className="sun"/>
            <span className="degree">10 c</span>
          </div>
          <div className="weatherInfo">
            <span className="degree">40% c</span>
            <span className="degree">6m/sc</span>
            <span className="degree">90prapm</span>
          </div>
        </div>
        <div className="btn">24hours weekly</div>
      </div>
    </div>
  );
};

export default Weather;
