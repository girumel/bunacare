import React from "react";
import styles from "./style.css";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AddchartRoundedIcon from "@mui/icons-material/AddchartRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";

const Sidebar = () => {
  return (
    <div className="sideBar">
      {/* <AutoGraphRoundedIcon></AutoGraphRoundedIcon>
    <CalendarMonthRoundedIcon></CalendarMonthRoundedIcon>
    <InfoRoundedIcon></InfoRoundedIcon>
    <DashboardCustomizeRoundedIcon></DashboardCustomizeRoundedIcon>
    <AddchartRoundedIcon></AddchartRoundedIcon>
    <RuleRoundedIcon></RuleRoundedIcon> */}
      <div className="sidemain">
        <ul className="overall">
          <li>
            <a href="">
              <AutoGraphRoundedIcon
                style={{ background: "transparent" }}
                className="active"
              ></AutoGraphRoundedIcon>
            </a>
          </li>
          <li>
            <a href="">
              <CalendarMonthRoundedIcon
                style={{ background: "transparent" }}
              ></CalendarMonthRoundedIcon>
            </a>
          </li>
          <li>
            <a href="">
              <InfoRoundedIcon
                style={{ background: "transparent" }}
              ></InfoRoundedIcon>
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <DashboardCustomizeRoundedIcon
                style={{ background: "transparent" }}
              ></DashboardCustomizeRoundedIcon>
            </a>
          </li>
          <li>
            <a href="">
              <AddchartRoundedIcon
                style={{ background: "transparent" }}
              ></AddchartRoundedIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
