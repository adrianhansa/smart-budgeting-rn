import {
  CREATE_EXPENSE_FAIL,
  CREATE_EXPENSE_REQUEST,
  CREATE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAIL,
  DELETE_EXPENSE_REQUEST,
  DELETE_EXPENSE_SUCCESS,
  GET_EXPENSES_BY_ACCOUNT_FAIL,
  GET_EXPENSES_BY_ACCOUNT_REQUEST,
  GET_EXPENSES_BY_ACCOUNT_SUCCESS,
  GET_EXPENSES_BY_MONTH_AND_YEAR_FAIL,
  GET_EXPENSES_BY_MONTH_AND_YEAR_REQUEST,
  GET_EXPENSES_BY_MONTH_AND_YEAR_SUCCESS,
  GET_EXPENSES_FAIL,
  GET_EXPENSES_REQUEST,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSE_FAIL,
  GET_EXPENSE_REQUEST,
  GET_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_FAIL,
  UPDATE_EXPENSE_REQUEST,
  UPDATE_EXPENSE_SUCCESS,
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

export const updateExpenseReducer = (
  state = { ...(expenseUpdated = {}) },
  action
) => {
  switch (action.type) {
    case UPDATE_EXPENSE_REQUEST:
      return { loading: true };
    case UPDATE_EXPENSE_SUCCESS:
      return { loading: false, success: true, expense: action.payload };
    case UPDATE_EXPENSE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteExpenseReducer = (
  state = { ...(expenseDeleted = {}) },
  action
) => {
  switch (action.type) {
    case DELETE_EXPENSE_REQUEST:
      return { loading: true };
    case DELETE_EXPENSE_SUCCESS:
      return { loading: false, success: true, expense: action.payload };
    case DELETE_EXPENSE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getExpenseReducer = (
  state = { ...(expenseDetails = {}) },
  action
) => {
  switch (action.type) {
    case GET_EXPENSE_REQUEST:
      return { loading: true };
    case GET_EXPENSE_SUCCESS:
      return { loading: false, success: true, expense: action.payload };
    case GET_EXPENSE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getExpensesReducer = (state = { ...(expenses = {}) }, action) => {
  switch (action.type) {
    case GET_EXPENSES_REQUEST:
      return { loading: true };
    case GET_EXPENSES_SUCCESS:
      return { loading: false, success: true, expense: action.payload };
    case GET_EXPENSES_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getExpensesByAccountReducer = (
  state = { ...(expensesByAccount = {}) },
  action
) => {
  switch (action.type) {
    case GET_EXPENSES_BY_ACCOUNT_REQUEST:
      return { loading: true };
    case GET_EXPENSES_BY_ACCOUNT_SUCCESS:
      return { loading: false, success: true, expenses: action.payload };
    case GET_EXPENSES_BY_ACCOUNT_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getExpensesByMonthAndYearReducer = (
  state = { ...(expensesByMonthAndYear = {}) },
  action
) => {
  switch (action.type) {
    case GET_EXPENSES_BY_MONTH_AND_YEAR_REQUEST:
      return { loading: true };
    case GET_EXPENSES_BY_MONTH_AND_YEAR_SUCCESS:
      return { loading: false, success: true, expenses: action.payload };
    case GET_EXPENSES_BY_MONTH_AND_YEAR_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
