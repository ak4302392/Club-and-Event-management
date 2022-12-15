import { AUTH, UPDATE } from "../constants/actionTypes";

import * as api from "../api/index";
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //log in the user..
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    return error.response.data;
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  console.log(formData);
  try {
    //log in the user..
    const { data, token } = await api.signUp(formData);
    console.log(token);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error.response);
  }
};


