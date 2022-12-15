import {
    CREATE,
    DELETE,
    FETCH_ALL,
    UPDATE,
  } from "../constants/actionTypes";
  
  const actions = (events = [], action) => {
    switch (action.type) {
      case DELETE:
        return events.filter((event) => event._id !== action.payload);
      case UPDATE:
        return events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        );
      case FETCH_ALL:
        return action.payload;
  
      case CREATE:
        return [...events, action.payload];
      default:
        return events;
    }
  };
  export default actions;