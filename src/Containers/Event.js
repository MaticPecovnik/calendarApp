import "./Event.css";
import AddEventModal from "./AddEventModal";
import EditEventModal from "./EditEventModal";
import Backdrop from "../Components/Backdrop";

import React from "react";

import { EDIT_EVENT, CREATE_EVENT } from "../Reducers/types";
import { connect } from "react-redux";

const Event = props => {
  return (
    <React.Fragment>
      <div className="create event__container">
        <button className="eventCreator btn" onClick={props.createEvent}>
          Create Event
        </button>
      </div>

      <div className="edit event__container">
        <button className="eventCreator btn" onClick={props.editEvent}>
          Edit Event
        </button>
      </div>

      {(props.events.inAddEventDialog || props.events.inEditEventDialog) && (
        <Backdrop />
      )}
      {props.events.inAddEventDialog && <AddEventModal />}
      {props.events.inEditEventDialog && <EditEventModal />}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    events: state.createEventReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createEvent: () => {
      dispatch({ type: CREATE_EVENT });
    },
    editEvent: () => {
      dispatch({ type: EDIT_EVENT });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
