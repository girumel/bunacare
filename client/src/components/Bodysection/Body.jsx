import React from "react";
import "./body.css";

// importing components

import Activity from "./Activitysection/Activity";
import Analysis from "./Analysissection/Analysis";
import Weather from "./Weathersection/Weather";

const Body = () => {
  return (
    <div className="mainContent">
      <div className="title">
        <h1>dashboard</h1>
      </div>
      <div className="bottom flex">
        <Weather className="weather" />
        <Activity className="activity" />
        <Analysis className="analysis" />
      </div>
    </div>
  );
};

export default Body;
