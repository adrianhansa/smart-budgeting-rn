import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Accounts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accounts</Text>
      <Button title="Add Account" onPress={navigation.navigate("AddAccount")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
});

export default Accounts;
