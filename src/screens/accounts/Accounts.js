import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getAccounts } from "../../redux/actions/accountActions";

const Accounts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { accounts, loading, success, error } = useSelector(
    (state) => state.accounts
  );
  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accounts</Text>
      <Button
        title="Add Account"
        onPress={() => navigation.navigate("AddAccount")}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : success ? (
        <FlatList
          data={accounts}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text style={styles.error}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
  error: { color: "red" },
  item: { borderColor: "blue", borderWidth: 1, padding: 20, marginVertical: 5 },
});

export default Accounts;
