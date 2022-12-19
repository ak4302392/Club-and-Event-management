import { FETCH_ALL } from "../constants/actionTypes";
import * as api from "../api";

export const getAllOrganizer = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrganizer();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
