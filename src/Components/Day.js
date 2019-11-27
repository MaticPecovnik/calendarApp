import React from "react";
import "./Day.css";
import getDate from "../HelperFunctions/getDate";

const Day = ({ events, decorator, date, currentMonth, currentYear }) => {
  let currentFullDate;
  if (decorator === 1) {
    currentFullDate = getDate(new Date(currentYear, currentMonth, date));
  }

  let eventsOnThisDay = [];

  for (let i = 0; i < events.length; i++) {
    if (events[i].eventDate === currentFullDate) {
      eventsOnThisDay.push(events[i]);
    }
  }

  return (
    <React.Fragment>
      {decorator === 0 ? (
        <div className="day__container dimmed"></div>
      ) : (
        <div className="day__container">
          <center>
            {date}
            {eventsOnThisDay.map((obj, i) => {
              return (
                <div className="calendar_event" key={i}>
                  <span className="eventTitle">{obj.eventTitle}</span>
                </div>
              );
            })}
          </center>
        </div>
      )}
    </React.Fragment>
  );
};

export default Day;
