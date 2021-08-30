import {
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  GET_ACCOUNTS_FAIL,
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNT_FAIL,
  GET_ACCOUNT_REQUEST,
  GET_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAIL,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
} from "../constants/accountConstants";

export const createAccountReducer = (state = { ...(account = {}) }, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
      return { loading: true };
    case CREATE_ACCOUNT_SUCCESS:
      return { loading: false, success: true, account: action.payload };
    case CREATE_ACCOUNT_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const updateAccountReducer = (
  state = { ...(accountUpdated = {}) },
  action
) => {
  switch (action.type) {
    case UPDATE_ACCOUNT_REQUEST:
      return { loading: true };
    case UPDATE_ACCOUNT_SUCCESS:
      return { loading: false, success: true, account: action.payload };
    case UPDATE_ACCOUNT_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getAccountReducer = (
  state = { ...(accountDetails = {}) },
  action
) => {
  switch (action.type) {
    case GET_ACCOUNT_REQUEST:
      return { loading: true };
    case GET_ACCOUNT_SUCCESS:
      return { loading: false, success: true, account: action.payload };
    case GET_ACCOUNT_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getAccountsReducer = (state = { ...(accounts = []) }, action) => {
  switch (action.type) {
    case GET_ACCOUNTS_REQUEST:
      return { loading: true };
    case GET_ACCOUNTS_SUCCESS:
      return { loading: false, success: true, accounts: action.payload };
    case GET_ACCOUNTS_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteAccountReducer = (
  state = { ...(accountDeleted = {}) },
  action
) => {
  switch (action.type) {
    case DELETE_ACCOUNT_REQUEST:
      return { loading: true };
    case DELETE_ACCOUNT_SUCCESS:
      return { loading: false, success: true, account: action.payload };
    case DELETE_ACCOUNT_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
