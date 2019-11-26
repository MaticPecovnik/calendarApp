import React from "react";
import Calendar from "../Containers/Calendar";
import EventsList from "../Components/EventsList";
import "./CalendarView.css";
import AddEventModal from "./AddEventModal";
import Backdrop from "../Components/Backdrop";

import { connect } from "react-redux";
import { EDIT_EVENT } from "../Reducers/types";

const CalendarView = props => {
  return (
    <React.Fragment>
      <div className="calendar_view__container">
        <div className="calendar__container">
          <Calendar events={props.events.events} />
        </div>
        <div className="next_events__container">
          <EventsList events={props.events.events} />
        </div>
      </div>

      {props.events.inManageEventDialog && <Backdrop />}
      {props.events.inManageEventDialog && (
        <AddEventModal editedEvent={props.events.editedEvent} />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    events: state.manageEventReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editEvent: eventInfo => {
      dispatch({ type: EDIT_EVENT, payload: eventInfo });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);
