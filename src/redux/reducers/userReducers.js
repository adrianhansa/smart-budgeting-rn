import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/usersConstants";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case LOGIN_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case LOGIN_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case REGISTER_FAIL:
      return { loading: false, success: false, error: action.payload };
    case LOGIN_FAIL:
      return { loading: false, success: false, error: action.payload };
    case LOGOUT:
      return { user: action.payload };
    default:
      return state;
  }
};
