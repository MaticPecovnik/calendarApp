import React from "react";
import "./EventsInTimeframe.css";
import SingleEvent from "../Containers/SingleEvent";

const EventsInTimeframe = ({ events, noEvents, timeframe }) => {
  return (
    <div className="timeframe__container">
      <div className="timeframe_title">{timeframe}</div>
      {events.length > 0 ? (
        events.map((obj, i) => {
          return <SingleEvent key={i} obj={obj} />;
        })
      ) : (
        <span className="no_events">{noEvents}</span>
      )}
    </div>
  );
};

export default EventsInTimeframe;
