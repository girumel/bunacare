import React from "react";
import "./sidebar.css";
// importting image
import Image from "../../Assets/logo.png";

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
            <a href="" className="menuLink flex active">
              <Dashboard className="icon" />
              <span className="smallText">dashboard</span>
            </a>
          </li>
          <li className="listitems">
            <a href="" className="menuLink flex">
              <Diagnostics className="icon" />
              <span className="smallText">diagnostics</span>
            </a>
          </li>
          <li className="listitems">
            <a href="" className="menuLink flex">
              <Graph className="icon" />
              <span className="smallText">Graph</span>
            </a>
          </li>
          <li className="listitems">
            <a href="" className="menuLink flex">
              <CheckList className="icon" />
              <span className="smallText">Checklist</span>
            </a>
          </li>
          <li className="listitems">
            <a href="" className="menuLink flex">
              <Calendar className="icon" />
              <span className="smallText">calender</span>
            </a>
          </li>
          <li className="listitems">
            <a href="" className="menuLink flex">
              <Info className="icon" />
              <span className="smallText">info</span>
            </a>
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
          <button className="btn">go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
