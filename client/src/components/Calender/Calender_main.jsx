import React, { useState } from "react";
import "./Calender.css";
import Calendar from "react-calendar";

const Calender_main = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className="calender">
      <div className="calender_title">
        <h2>calender</h2>
      </div>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} selectRange={true} />
      </div>
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>{" "}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
};

export default Calender_main;
