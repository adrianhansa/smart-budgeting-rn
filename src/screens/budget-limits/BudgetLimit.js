import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const BudgetLimit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BudgetLimit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
});

export default BudgetLimit;
