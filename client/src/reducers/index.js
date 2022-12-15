import { combineReducers } from "redux";
import authReducer from "./Auth";
import eventReducer from "./events"
export default combineReducers({
  authReducer,
  eventReducer,
});