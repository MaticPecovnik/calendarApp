import React from "react";

import "./App.css";
import Header from "./Components/Header";
import Event from "./Components/Event";
import Calendar from "./Components/Calendar";

import { EVENT_VIEW, CALENDAR_VIEW } from "./Reducers/types";
import { connect } from "react-redux";

const App = ({ view }) => {
  return (
    <React.Fragment>
      <Header />
      {view.eventView && <Event />}
      {view.calendarView && <Calendar />}
    </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
