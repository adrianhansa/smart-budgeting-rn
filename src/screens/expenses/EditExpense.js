import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getExpense, updateExpense } from "../../redux/actions/expenseActions";
import { getAccounts } from "../../redux/actions/accountActions";
import Loading from "../../components/Loading";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const EditExpense = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.accounts);
  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  const { loading, expense, success, error } = useSelector(
    (state) => state.expenseDetails
  );
  const [selectedAccount, setSelectedAccount] = useState(
    expense ? expense.account : ""
  );
  useEffect(() => {
    dispatch(getExpense(route.params.id));
    // if (!success) {

    // }
    // else {
    //   setSelectedAccount(expense.account);
    // }
  }, [dispatch]);
  const validationSchema = yup.object({
    account: yup.string().required(),
    amount: yup.string().required(),
    description: yup.string().required(),
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Add Expense</Text>
        <Text style={styles.title}>EditExpense {route.params.id}</Text>
        <Pressable onPress={() => navigation.navigate("ExpensesScreen")}>
          {loading ? (
            <Loading />
          ) : success ? (
            <Formik
              onSubmit={(values) => {
                console.log(values);
                dispatch(updateExpense(route.params.id, values));
                navigation.navigate("ExpensesScreen");
              }}
              initialValues={{
                amount: expense.amount,
                description: expense.description,
                account: expense.account,
              }}
              validationSchema={validationSchema}
            >
              {(props) => {
                return (
                  <>
                    <TextInput
                      placeholder="amount"
                      keyboardType="numeric"
                      style={styles.textInput}
                      value={props.values.amount}
                      onChangeText={props.handleChange("amount")}
                      onBlur={props.handleBlur("amount")}
                    />
                    <Text style={styles.error}>
                      {props.touched.amount && props.errors.amount}
                    </Text>
                    {loading ? (
                      <Loading />
                    ) : success ? (
                      <Picker
                        selectedValue={selectedAccount}
                        onValueChange={(itemValue) => {
                          props.values.account = itemValue;
                          setSelectedAccount(itemValue);
                        }}
                        style={styles.accountList}
                      >
                        {accounts.map((account) => {
                          return (
                            <Picker.Item
                              label={account.name}
                              value={account._id}
                              key={account._id}
                            />
                          );
                        })}
                      </Picker>
                    ) : (
                      <Text>{error}</Text>
                    )}

                    <TextInput
                      placeholder="description"
                      style={styles.textInput}
                      value={props.values.description}
                      onChangeText={props.handleChange("description")}
                      onBlur={props.handleBlur("description")}
                    />
                    <Text style={styles.error}>
                      {props.touched.description && props.errors.description}
                    </Text>
                    <TouchableOpacity
                      onPress={() => props.handleSubmit()}
                      style={styles.buttonWrapper}
                    >
                      <Text style={styles.buttonText}>Add Expense</Text>
                    </TouchableOpacity>
                    <Ionicons
                      name="arrow-back-circle-outline"
                      size={48}
                      color="grey"
                      onPress={() => navigation.navigate("ExpensesScreen")}
                    />
                  </>
                );
              }}
            </Formik>
          ) : (
            <Text>{error}</Text>
          )}

          <Text>Go Back</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  accountList: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 12,
    width: Dimensions.get("window").width - 40,
    marginBottom: 10,
  },
  formContainer: {
    alignItems: "center",
    marginTop: 5,
    justifyContent: "center",
    paddingHorizontal: 20,
    width: Dimensions.get("window").width,
  },
  title: { fontSize: 20, marginVertical: 15, color: "#3c9978" },
  error: { color: "red" },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    width: "100%",
    marginBottom: 10,
  },
  buttonText: { fontSize: 24, textAlign: "center", color: "#3c9978" },
  buttonWrapper: {
    padding: 10,
    borderColor: "grey",
    backgroundColor: "#a1d5d6",
    borderWidth: 1,
    borderRadius: 12,
    width: "100%",
  },
  otherScreenWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default EditExpense;
