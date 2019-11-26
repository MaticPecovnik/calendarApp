import React from "react";

import "./App.css";
import Header from "./Containers/Header";
import Event from "./Containers/Event";
import CalendarView from "./Components/CalendarView";

import { EVENT_VIEW, CALENDAR_VIEW } from "./Reducers/types";
import { connect } from "react-redux";

const App = props => {
  return (
    <React.Fragment>
      <Header />
      {props.view.eventView && <Event />}
      {props.view.calendarView && <CalendarView events={props.events.events} />}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    view: state.viewReducer,
    events: state.manageEventReducer
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
