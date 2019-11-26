import React from "react";
import "./Calendar.css";
import CalendarDays from "../Components/CalendarDays";

import { connect } from "react-redux";
import { MONTH_BACK, MONTH_FORWARD } from "../Reducers/types";

const Calendar = props => {
  const numToStringMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <React.Fragment>
      <div className="choose_month__container">
        <div className="button__container">
          <button className="month_handler btn" onClick={props.monthBackward}>
            {"<"}
          </button>
        </div>
        <div className="chosenMonth">
          {numToStringMonth[props.month.currentMonth]},{" "}
          {props.month.currentYear}
        </div>
        <div className="button__container">
          <button className="month_handler btn" onClick={props.monthForward}>
            {">"}
          </button>
        </div>
      </div>
      <div className="calendar">
        <CalendarDays />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    month: state.calendarMonthReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    monthForward: () => {
      dispatch({ type: MONTH_FORWARD });
    },
    monthBackward: () => {
      dispatch({ type: MONTH_BACK });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
