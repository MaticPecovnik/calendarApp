import React from "react";
import "./SingleEvent.css";

import { connect } from "react-redux";
import { EDIT_EVENT } from "../Reducers/types";

const SingleEvent = props => {
  const obj = props.obj;
  const inlineStyle = {
    backgroundColor: obj.eventColor
  };

  return (
    <div
      className="single_event__container"
      onClick={e => {
        e.preventDefault();
        props.editEvent(obj);
      }}
    >
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
