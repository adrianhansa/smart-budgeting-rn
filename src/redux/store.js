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

const reducerRoot = combineReducers({
  auth: authReducer,
  account: createAccountReducer,
  accountDetails: getAccountReducer,
  accountUpdated: updateAccountReducer,
  accounts: getAccountsReducer,
  accountDeleted: deleteAccountReducer,
});

const store = createStore(reducerRoot, middleware);

export default store;
