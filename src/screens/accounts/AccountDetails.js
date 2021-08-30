import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAccount, deleteAccount } from "../../redux/actions/accountActions";

const AccountDetails = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { account, loading, success, error } = useSelector(
    (state) => state.accountDetails
  );
  useEffect(() => {
    dispatch(getAccount(route.params.slug));
  }, [dispatch, route]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : success ? (
        <>
          <Text style={styles.title}>{account.name}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(deleteAccount(account.slug));
              navigation.navigate("Accounts");
            }}
          >
            <Text>Delete Account</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 40 },
});

export default AccountDetails;
