import React from "react";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import AppNavigation from "./src/navigation/AppNavigation";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
