import {
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
      type: REGISTER_REQUEST,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
