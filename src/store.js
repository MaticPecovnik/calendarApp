import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import viewReducer from "./Reducers/reducers";

const store = createStore(
  combineReducers({ viewReducer }),
  {},
  applyMiddleware(logger)
);

export default store;
