import React from "react";
import "./SingleEvent.css";

const SingleEvent = ({ obj }) => {
  return (
    <div className="single_event__container">
      <div
        className="event_color__container"
        style={{ backgroundColor: obj.eventColor }}
      ></div>
      <div className="event_title">Your event {obj.eventTitle}</div>
      <div className="event_description">{obj.eventDescription}</div>
      <div className="event_date">On {obj.eventDate}</div>
      <div className="event_time">
        From {obj.eventStartTime} to {obj.eventEndTime}
      </div>
    </div>
  );
};

export default SingleEvent;
