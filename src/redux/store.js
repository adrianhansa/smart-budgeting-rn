import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = composeWithDevTools(applyMiddleware(thunk));

import { authReducer } from "./reducers/userReducers";

const reducerRoot = combineReducers({
  auth: authReducer,
});

const store = createStore(reducerRoot, middleware);

export default store;
