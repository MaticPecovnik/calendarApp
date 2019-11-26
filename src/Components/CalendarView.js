import React from "react";
import Calendar from "./Calendar";
import EventsList from "./EventsList";
import "./CalendarView.css";

const CalendarView = props => {
  return (
    <div className="calendar_view__container">
      <div className="calendar__container">
        <Calendar events={props.events} />
      </div>
      <div className="next_events__container">
        <EventsList events={props.events} />
      </div>
    </div>
  );
};

export default CalendarView;
