import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const EditBudgetLimit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EditBudgetLimit!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
});

export default EditBudgetLimit;
