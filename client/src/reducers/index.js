import { combineReducers } from "redux";
import authReducer from "./Auth";
import eventReducer from "./events";
import organizerReducer from "./organizer";
export default combineReducers({
  authReducer,
  eventReducer,
  organizerReducer,
});
