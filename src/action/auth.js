import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "./types";
import { setAlert } from "./alert";

// Load User

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({
      type: USER_LOADED,
      payload: localStorage.token
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const signUp = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("/auth/local/register", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(err.message, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// SignIn User
export const signIn = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  //const body = JSON.stringify(email, password);
  //console.log("body", body);
  try {
    const res = await axios.post("http://localhost:1337/auth/local", {
      identifier: email,
      password: password
    });

    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(err.message, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};
