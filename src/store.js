import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import {
  viewReducer,
  manageEventReducer,
  calendarMonthReducer
} from "./Reducers/reducers";

const store = createStore(
  combineReducers({ viewReducer, manageEventReducer, calendarMonthReducer }),
  applyMiddleware(logger)
);

export default store;
