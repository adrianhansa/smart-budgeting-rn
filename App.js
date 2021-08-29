import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Register from "./src/screens/users/Register";
import store from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Register />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
