import React from "react";
import "./NextEvents.css";
import "./SingleEvent";
import SingleEvent from "./SingleEvent";
import eventHandler from "../HelperFunctions/eventHandler";

const NextEvents = props => {
  const events = eventHandler(props.events);
  if (events.length > 0) {
    return (
      <React.Fragment>
        {events.map((obj, i) => {
          return <SingleEvent key={i} obj={obj} />;
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="no_events__container">No Events to Display!</div>
      </React.Fragment>
    );
  }
};

export default NextEvents;
