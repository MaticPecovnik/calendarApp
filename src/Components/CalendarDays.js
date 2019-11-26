import React from "react";
import "./CalendarDays.css";

const CalendarDays = () => {
  return (
    <div className="days_container">
      <div className="day monday">M</div>
      <div className="day tuesday">T</div>
      <div className="day wednesday">W</div>
      <div className="day thursday">T</div>
      <div className="day friday">F</div>
      <div className="day saturday">S</div>
      <div className="day sunday">S</div>
    </div>
  );
};

export default CalendarDays;
