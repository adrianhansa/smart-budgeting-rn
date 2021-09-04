import React, { useEffect } from "react";
import { StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import Logout from "../../components/Logout";
import { getExpenses } from "../../redux/actions/expenseActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";

const Expenses = ({ navigation }) => {
  const dispatch = useDispatch();
  const { expenses, loading, error, success } = useSelector(
    (state) => state.expenseList
  );
  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Logout />
      {loading ? (
        <Loading />
      ) : success ? (
        <>
          <Text style={styles.title}>Expenses</Text>
          <Pressable onPress={() => navigation.navigate("AddExpense")}>
            <Text>Add an Expense</Text>
          </Pressable>
        </>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
});

export default Expenses;
