import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/usersConstants";
import { BASE_URL } from "../constants/url";
import axios from "axios";

export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const response = await axios.post(`${BASE_URL}/register`, user);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    //retrievieng the token from headers
    console.log(response.headers);
    //storing the token in AsyncStorage
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    //retrievieng the token from headers
    console.log(response.headers.token);
    //storing the token in AsyncStorage
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const logout = async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/logout`);
  dispatch({ type: LOGOUT, payload: response.data });
};
