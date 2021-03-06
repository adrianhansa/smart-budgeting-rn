import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Text, FlatList } from "react-native";
import Logout from "../../components/Logout";
import { getExpenses } from "../../redux/actions/expenseActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { EvilIcons } from "@expo/vector-icons";
import Expense from "./Expense";
import _ from "lodash";

const Expenses = ({ navigation }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const dispatch = useDispatch();
  const { expenses, loading, error, success } = useSelector(
    (state) => state.expenseList
  );
  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);
  useEffect(() => {
    if (expenses && expenses.length > 0) {
      const expensesByAccount = expenses.map((expense) => {
        return { account: expense.account.name, expense };
      });
      //new array for SectionList
      // const result = expensesByAccount.reduce((acc, expense) => {
      //   expensesByAccount.filter((item) => {
      //     item.account === expense.account;
      //     console.log([...acc]);
      //   });
      // }, []);
      // console.log(result);

      const total = expenses.reduce((a, b) => ({
        amount: a.amount + b.amount,
      }));
      setTotalExpenses(total.amount);
    }
  }, [expenses]);
  return (
    <View style={styles.container}>
      <Logout />
      {loading ? (
        <Loading />
      ) : success ? (
        <>
          <Text style={styles.title}>Expenses: £ {totalExpenses}</Text>
          <EvilIcons
            name="plus"
            size={48}
            color="green"
            onPress={() => navigation.navigate("AddExpense")}
          />
          <FlatList
            renderItem={({ item }) => {
              return <Expense expense={item} navigation={navigation} />;
            }}
            keyExtractor={(item) => item._id}
            data={expenses}
            style={{ marginTop: 10 }}
          />
        </>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  title: { fontSize: 36 },
});

export default Expenses;
