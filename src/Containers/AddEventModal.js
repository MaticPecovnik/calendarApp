import React from "react";
import { useState } from "react";
import "./AddEventModal.css";
import getDate from "../HelperFunctions/getDate";

import { CONFIRM_EVENT, CANCEL_EVENT } from "../Reducers/types";
import { connect } from "react-redux";

const AddEventModal = props => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventColor, setEventColor] = useState("#ff0000");
  const currentDate = getDate(new Date());

  const handleTitle = event => {
    setEventTitle(event.target.value);
  };
  const handleDescription = event => {
    setEventDescription(event.target.value);
  };
  const handleDate = event => {
    setEventDate(event.target.value);
  };

  const handleEventStart = event => {
    setEventStartTime(event.target.value);
  };

  const handleEventEnd = event => {
    setEventEndTime(event.target.value);
  };

  const handleEventColor = event => {
    setEventColor(event.target.value);
  };

  return (
    <div className="modal__container">
      <div className="form__container">
        <form className="event_form">
          <div className="title__container cnt">
            <label htmlFor="title" className="main_label">
              Event Title
            </label>
            <br></br>
            <input
              type="text"
              value={eventTitle}
              onChange={handleTitle}
              name="title"
              className="title_input"
              required
            ></input>
          </div>
          <div className="description__container cnt">
            <label htmlFor="description" className="main_label">
              Description
            </label>
            <br></br>
            <textarea
              type="text"
              value={eventDescription}
              onChange={handleDescription}
              name="description"
              className="description_input"
              style={{ resize: "none", width: "99%", height: "20vh" }}
              required
            ></textarea>
          </div>
          <div className="date__container cnt">
            <label htmlFor="date" className="time_label">
              On{" "}
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={handleDate}
              name="date"
              className="date_input"
              min={currentDate}
              required
            ></input>
            <label htmlFor="start" className="time_label">
              from{" "}
            </label>
            <input
              type="time"
              value={eventStartTime}
              onChange={handleEventStart}
              name="start"
              className="start_input"
              required
            ></input>
            <label htmlFor="end" className="time_label">
              to{" "}
            </label>
            <input
              type="time"
              value={eventEndTime}
              onChange={handleEventEnd}
              name="end"
              className="end_input"
              required
            ></input>
          </div>
          <div className="color__container cnt">
            <label htmlFor="color" className="time_label">
              Choose an Event Color
            </label>
            <input
              type="color"
              value={eventColor}
              onChange={handleEventColor}
              name="color"
              className="end_input"
              required
            ></input>
          </div>
        </form>
      </div>
      <div className="action__container">
        {eventTitle === "" ||
        eventDescription === "" ||
        eventDate === "" ||
        eventStartTime === "" ||
        eventEndTime === "" ? (
          <button className="action_handler btn" disabled>
            Confirm
          </button>
        ) : (
          <button
            className="action_handler btn"
            onClick={e => {
              e.preventDefault();
              props.confirmEvent({
                eventTitle,
                eventDescription,
                eventDate,
                eventStartTime,
                eventEndTime,
                eventColor
              });
            }}
          >
            Confirm
          </button>
        )}
        <button className="action_handler btn" onClick={props.cancelEvent}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.createEventReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    confirmEvent: eventInfo => {
      dispatch({ type: CONFIRM_EVENT, payload: eventInfo });
    },
    cancelEvent: () => {
      dispatch({ type: CANCEL_EVENT });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventModal);
