import {
  CREATE_EXPENSE_FAIL,
  CREATE_EXPENSE_REQUEST,
  CREATE_EXPENSE_SUCCESS,
} from "../constants/expenseConstants";

export const createExpenseReducer = (state = { ...(expense = {}) }, action) => {
  switch (action.type) {
    case CREATE_EXPENSE_REQUEST:
      return { loading: true };
    case CREATE_EXPENSE_SUCCESS:
      return { loading: false, success: true, expense: action.payload };
    case CREATE_EXPENSE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
