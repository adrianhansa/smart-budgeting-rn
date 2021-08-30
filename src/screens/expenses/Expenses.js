import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Logout from "../../components/Logout";
import AddExpense from "./AddExpense";

const Expenses = () => {
  return (
    <View style={styles.container}>
      <Logout />
      <Text style={styles.title}>Expenses</Text>
      <AddExpense />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
});

export default Expenses;
