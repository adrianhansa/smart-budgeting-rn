import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getAccounts } from "../../redux/actions/accountActions";
import Account from "./Account";

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
          style={styles.list}
          data={accounts}
          renderItem={({ item }) => (
            <Account navigation={navigation} item={item} />
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: Dimensions.get("window").width - 40,
  },
  title: { fontSize: 36 },
  error: { color: "red" },
});

export default Accounts;
