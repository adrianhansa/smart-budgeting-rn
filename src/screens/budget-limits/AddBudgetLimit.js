import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const AddBudgetLimit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddBudgetLimit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
});

export default AddBudgetLimit;
