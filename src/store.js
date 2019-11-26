import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { viewReducer, manageEventReducer } from "./Reducers/reducers";

const store = createStore(
  combineReducers({ viewReducer, manageEventReducer }),
  applyMiddleware(logger)
);

//store.subscribe(() => console.log(store.getState()));

export default store;
