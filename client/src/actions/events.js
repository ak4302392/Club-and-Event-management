import * as api from "../api";
import {
  FETCH_ALL,
  DELETE,
  UPDATE,
  CREATE,
} from "../constants/actionTypes";
//Action creators

export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createEvent = (event,navigate) => async (dispatch) => {
  try {
      
    const { data } = await api.createEvent(event);
    dispatch({ type: CREATE, payload: data });
    navigate("/dashboard")
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = (id, event) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, event);
    console.log("I am here")
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api.deleteEvent(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};


