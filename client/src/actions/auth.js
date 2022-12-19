import { AUTH, UPDATE } from "../constants/actionTypes";

import * as api from "../api/index";
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //log in the user..
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    window.location.assign("/");
  } catch (error) {
    return error.response.data;
  }
};

export const organizerSignin = (formData, navigate) => async (dispatch) => {
  try {
    //log in the user..
    const { data } = await api.organizerSignIn(formData);
    dispatch({ type: AUTH, data });
    window.location.assign("/");
  } catch (error) {
    return error.response.data;
  }
};

export const adminSignin = (formData, navigate) => async (dispatch) => {
  try {
    //log in the user..
    const { data } = await api.adminSignIn(formData);
    dispatch({ type: AUTH, data });
    window.location.assign("/admin");
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
    window.location.assign("/");
  } catch (error) {
    console.log(error.response);
  }
};

export const organizerSignup = (formData, navigate) => async (dispatch) => {
  console.log(formData);
  try {
    //log in the user..
    const { data, token } = await api.organizerSignUp(formData);
    console.log(token);
    dispatch({ type: AUTH, data });
    window.location.assign("/");
  } catch (error) {
    console.log(error.response);
  }
};

