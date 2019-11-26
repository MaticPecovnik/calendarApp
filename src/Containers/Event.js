import "./Event.css";
import AddEventModal from "./AddEventModal";
import Backdrop from "../Components/Backdrop";

import React from "react";

import { CREATE_EVENT } from "../Reducers/types";
import { connect } from "react-redux";

const Event = props => {
  return (
    <React.Fragment>
      <div className="create event__container">
        <button className="eventCreator btn" onClick={props.createEvent}>
          Create Event
        </button>
      </div>

      {props.events.inAddEventDialog && <Backdrop />}
      {props.events.inAddEventDialog && <AddEventModal />}
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
    createEvent: () => {
      dispatch({ type: CREATE_EVENT });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
