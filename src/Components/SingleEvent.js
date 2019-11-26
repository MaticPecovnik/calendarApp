import React from "react";
import "./SingleEvent.css";

const SingleEvent = ({ obj }) => {
  const inlineStyle = {
    backgroundColor: obj.eventColor
  };

  return (
    <div className="single_event__container">
      <center>
        <div className="category_color__container" style={inlineStyle}></div>
        <div className="event_title">{obj.eventTitle}</div>
        <div className="event_description">{obj.eventDescription}</div>
        <div className="event_date">
          On {obj.eventDate} from {obj.eventStartTime} to {obj.eventEndTime}
        </div>
        <div className="category_color__container" style={inlineStyle}></div>
      </center>
    </div>
  );
};

export default SingleEvent;
