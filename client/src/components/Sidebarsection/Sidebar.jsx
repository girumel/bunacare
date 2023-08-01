import React from "react";
import "./sidebar.css";
// importting image
import Image from "../../Assets/logo.png";

import { Outlet, Link } from "react-router-dom";

// importing material ul icons
import Dashboard from "@mui/icons-material/DashboardCustomizeOutlined";
import Diagnostics from "@mui/icons-material/SpaOutlined";
import CheckList from "@mui/icons-material/FactCheckOutlined";
import Graph from "@mui/icons-material/AssessmentOutlined";
import Calendar from "@mui/icons-material/CalendarMonthOutlined";
import Info from "@mui/icons-material/InfoOutlined";
import Help from "@mui/icons-material/HelpOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar grid">
      <div className="logoDiv flex">
        <img src={Image} alt="logo_image" srcset="" />
        <h2 className="divTitle">buna care</h2>
      </div>

      <div className="menuDiv">
        <h2>quick menu</h2>

        <ul className="menuList grid">
          <li className="listitems">
            <Link className="menuLink flex active" to="/">
              <Dashboard className="icon" />
              <span className="smallText">dashbaord</span>
            </Link>
          </li>
          <li className="listitems">
            <Link className="menuLink flex" to="/diagnostics">
              <Diagnostics className="icon" />
              <span className="smallText">diagnostics</span>
            </Link>
          </li>
          <li className="listitems">
            <Link className="menuLink flex" to="/graph">
              <Graph className="icon" />
              <span className="smallText">Graph</span>
            </Link>
          </li>
          <li className="listitems">
            <Link className="menuLink flex" to="/checklist">
              <Graph className="icon" />
              <span className="smallText">Checklist</span>
            </Link>
          </li>
          <li className="listitems">
            <Link className="menuLink flex" to="/calender">
              <Calendar className="icon" />
              <span className="smallText">calender</span>
            </Link>
          </li>
          <li className="listitems">
            <Link className="menuLink flex" to="/info">
              <Info className="icon" />
              <span className="smallText">info</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarCard">
        <Help className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <h3>help center</h3>
          <p>
            having trouble in buna care, please contact us for more information.
          </p>
          <button className="btn">
            <a
              href="https://www.ethiopiatrade.org/ethiopia-coffee-farms/"
              target="__blank__"
            >
              go to help center
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
