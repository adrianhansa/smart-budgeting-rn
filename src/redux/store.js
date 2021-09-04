import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = composeWithDevTools(applyMiddleware(thunk));

import { authReducer } from "./reducers/userReducers";
import {
  createAccountReducer,
  updateAccountReducer,
  deleteAccountReducer,
  getAccountReducer,
  getAccountsReducer,
} from "./reducers/accountReducers";

import {
  createExpenseReducer,
  updateExpenseReducer,
  deleteExpenseReducer,
  getExpenseReducer,
  getExpensesReducer,
  getExpensesByAccountReducer,
  getExpensesByMonthAndYearReducer,
} from "./reducers/expenseReducers";

const reducerRoot = combineReducers({
  auth: authReducer,
  account: createAccountReducer,
  accountDetails: getAccountReducer,
  accountUpdated: updateAccountReducer,
  accounts: getAccountsReducer,
  accountDeleted: deleteAccountReducer,
  expenseCreated: createExpenseReducer,
  expenseDetails: getExpenseReducer,
  expenseUpdated: updateExpenseReducer,
  expenseDeleted: deleteExpenseReducer,
  expenseList: getExpensesReducer,
  expenseListByAccount: getExpensesByAccountReducer,
  expenseListByMonthAndYear: getExpensesByMonthAndYearReducer,
});

const store = createStore(reducerRoot, middleware);

export default store;
