// Action types for changing between the calendar and event views

import { EVENT_VIEW, CALENDAR_VIEW } from "./types";

// Action types for handling event submission

import { CONFIRM_EVENT, CANCEL_EVENT, CREATE_EVENT, EDIT_EVENT } from "./types";

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

// Reducer for handling event creation/edit interaction

const initial_events = [
  {
    eventColor: "#ff0000",
    eventDate: "2019-12-12",
    eventDescription: "Zobozdravnik v Celju",
    eventEndTime: "13:00",
    eventStartTime: "12:00",
    eventTitle: "Zobozdravnik"
  },
  {
    eventColor: "#00ff00",
    eventDate: "2019-08-12",
    eventDescription: "Ortodont v Celju",
    eventEndTime: "13:00",
    eventStartTime: "12:00",
    eventTitle: "Ortodont"
  }
];

export const createEventReducer = (
  state = {
    inAddEventDialog: false,
    inEditEventDialog: false,
    events: initial_events
  },
  action
) => {
  switch (action.type) {
    case CREATE_EVENT:
      state = { ...state, inAddEventDialog: true };
      break;
    case EDIT_EVENT:
      state = { ...state, inEditEventDialog: true };
      break;
    case CONFIRM_EVENT:
      state = {
        ...state,
        inAddEventDialog: false,
        inEditEventDialog: false,
        events: [...state.events, action.payload]
      };
      break;
    case CANCEL_EVENT:
      state = {
        ...state,
        inAddEventDialog: false,
        inEditEventDialog: false
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
