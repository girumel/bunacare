import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Weather from "../weather/Weather";

import "./style/Dash.css";
const Dashboard = () => {
  return (
    <div className="main">
      <header className="DashTitle">
        <div className="logo">
          <a href="#">
            <h1>buna care</h1>
          </a>
        </div>
        <span className="title">
          <h2>Dashboard</h2>
        </span>
      </header>
      <Sidebar />
      <Weather/>
    </div>
  );
};

export default Dashboard;
