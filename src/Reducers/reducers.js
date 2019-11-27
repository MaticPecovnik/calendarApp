import changeMonthYear from "../HelperFunctions/changeMonthYear";

// Action types for changing between the calendar and event views

import { EVENT_VIEW, CALENDAR_VIEW } from "./types";

// Action types for handling event submission, creation and editing

import { CONFIRM_EVENT, CANCEL_EVENT, CREATE_EVENT, EDIT_EVENT } from "./types";

// Action types for going one month back or one month forward in the calendar

import { MONTH_BACK, MONTH_FORWARD } from "./types";

// Reducer for handlign switching between even and calendar view

export const viewReducer = (
  state = { eventView: false, calendarView: true },
  action
) => {
  switch (action.type) {
    case EVENT_VIEW:
      state = { ...state, eventView: true, calendarView: false };
      break;
    case CALENDAR_VIEW:
      state = { ...state, eventView: false, calendarView: true };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

// Reducer for handling event creation interaction

const initial_events = [];

export const manageEventReducer = (
  state = {
    inManageEventDialog: false,
    events: initial_events,
    editedEvent: {}
  },
  action
) => {
  switch (action.type) {
    case CREATE_EVENT:
      state = { ...state, inManageEventDialog: true };
      break;
    case EDIT_EVENT:
      state = {
        ...state,
        inManageEventDialog: true,
        editedEvent: action.payload
      };
      break;
    case CONFIRM_EVENT:
      const numEvents = state.events.length;

      if (action.payload.eventIndex === state.events.length) {
        // this means that a new event is being added
        state = {
          ...state,
          inManageEventDialog: false,
          events: [
            ...state.events,
            { ...action.payload, eventIndex: numEvents }
          ],
          editedEvent: {}
        };
      } else {
        // a old event is being edited
        let newEvents = state.events;
        newEvents[action.payload.eventIndex - 1] = action.payload;
        state = {
          ...state,
          inManageEventDialog: false,
          events: newEvents,
          editedEvent: {}
        };
      }

      break;
    case CANCEL_EVENT:
      state = {
        ...state,
        inManageEventDialog: false,
        editedEvent: {}
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

// Reducer for handling switching of month forward or backward

export const calendarMonthReducer = (
  state = {
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()
  },
  action
) => {
  switch (action.type) {
    case MONTH_BACK:
      const [yearOutBack, monthOutBack] = changeMonthYear(
        state.currentYear,
        state.currentMonth,
        "MONTH_BACK"
      );
      state = {
        ...state,
        currentMonth: monthOutBack,
        currentYear: yearOutBack
      };
      break;
    case MONTH_FORWARD:
      const [yearOutForw, monthOutForw] = changeMonthYear(
        state.currentYear,
        state.currentMonth,
        "MONTH_FORWARD"
      );
      state = {
        ...state,
        currentMonth: monthOutForw,
        currentYear: yearOutForw
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
