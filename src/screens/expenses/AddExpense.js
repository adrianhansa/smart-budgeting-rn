import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { getAccounts } from "../../redux/actions/accountActions";
import { createExpense } from "../../redux/actions/expenseActions";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import Loading from "../../components/Loading";

const AddExpense = ({ navigation }) => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const schemaValidation = yup.object({
    amount: yup.string().required(),
    account: yup.string().required(),
    description: yup.string().required(),
  });
  const dispatch = useDispatch();
  const { loading, success, accounts, error } = useSelector(
    (state) => state.accounts
  );
  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{
            amount: "",
            account: "",
            description: "",
          }}
          onSubmit={(values) => {
            dispatch(createExpense(values));
            navigation.navigate("ExpensesScreen");
          }}
          schemaValidation={schemaValidation}
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
                <TouchableOpacity
                  onPress={() => props.handleSubmit()}
                  style={styles.buttonWrapper}
                >
                  <Text style={styles.buttonText}>Add Expense</Text>
                </TouchableOpacity>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
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
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AddExpense;
