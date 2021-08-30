import {
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
} from "../constants/accountConstants";

export const createAccountReducer = (state = { account: {} }, action) => {
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

// export const updateActionReducer = ()
