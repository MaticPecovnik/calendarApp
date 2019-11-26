import React from "react";
import eventHandler from "../HelperFunctions/eventHandler";
import EventsInTimeframe from "./EventsInTimeframe";
import "./EventsList.css";

const EventsList = props => {
  // eslint-disable-next-line
  const [lastWeek, thisWeek, thisMonth, events] = eventHandler(props.events);

  return (
    <div className="event_list__container">
      <EventsInTimeframe
        events={lastWeek}
        noEvents={"No events in the last 7 days."}
        timeframe={"Last week"}
      />
      <EventsInTimeframe
        events={thisWeek}
        noEvents={"No events in the next 7 days."}
        timeframe={"Next week"}
      />
      <EventsInTimeframe
        events={thisMonth}
        noEvents={"No events in the next month."}
        timeframe={"Next Month"}
      />
    </div>
  );
};

export default EventsList;
