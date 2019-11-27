import React from "react";
import "./Day.css";

const Day = ({ events, decorator, date }) => {
  return (
    <React.Fragment>
      {decorator === 0 ? (
        <div className="day__container dimmed">
          <center>{date}</center>
        </div>
      ) : (
        <div className="day__container">
          <center>{date}</center>
        </div>
      )}
    </React.Fragment>
  );
};

export default Day;
