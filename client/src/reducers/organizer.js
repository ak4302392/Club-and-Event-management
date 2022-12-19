import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants/actionTypes";

const actions = (organizers = [], action) => {
  switch (action.type) {
    case DELETE:
      return organizers.filter((org) => org._id !== action.payload);
    case UPDATE:
      return organizers.map((organizer) =>
        organizer._id === action.payload._id ? action.payload : organizer
      );
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...organizers, action.payload];
    default:
      return organizers;
  }
};
export default actions;
