import React, { useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Logout from "../../components/Logout";
import AddExpense from "./AddExpense";
import { getExpenses } from "../../redux/actions/expenseActions";
import { useDispatch, useSelector } from "react-redux";

const Expenses = () => {
  const dispatch = useDispatch();
  const expenseList = useSelector((state) => state.expenseList);
  useEffect(() => {
    dispatch(getExpenses());
    console.log(expenseList);
  }, [dispatch]);
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
