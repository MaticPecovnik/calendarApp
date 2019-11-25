import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { viewReducer, createEventReducer } from "./Reducers/reducers";

const store = createStore(
  combineReducers({ viewReducer, createEventReducer }),
  applyMiddleware(logger)
);

//store.subscribe(() => console.log(store.getState()));

export default store;
