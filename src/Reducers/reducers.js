import { EVENT_VIEW, CALENDAR_VIEW } from "./types";

const viewReducer = (
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

export default viewReducer;
