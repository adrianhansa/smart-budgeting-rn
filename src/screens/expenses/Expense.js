import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Expense = ({ expense }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.description}>{expense.description}</Text>
      <Text style={styles.amount}>£ {expense.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#347546",
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 4,
    backgroundColor: "#c8dece",
  },
  description: { fontSize: 24, color: "#347546" },
  amount: { fontSize: 24, color: "#347546" },
});

export default Expense;
