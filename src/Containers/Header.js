import React from "react";
import "./Header.css";

import { EVENT_VIEW, CALENDAR_VIEW } from "../Reducers/types";
import { connect } from "react-redux";

const Header = props => {
  console.log(document.getElementsByClassName("header"));

  return (
    <div className="header">
      <div className="header_title__container">
        <h1 className="header_title">Welcome to the Best Event Planing App</h1>
      </div>{" "}
      <div className="header_control">
        <button className="headerButton btn" onClick={props.goToCalenderView}>
          Calendar
        </button>
        <button className="headerButton btn" onClick={props.goToEventView}>
          Events
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    view: state.viewReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToEventView: () => {
      dispatch({ type: EVENT_VIEW });
    },
    goToCalenderView: () => {
      dispatch({ type: CALENDAR_VIEW });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
