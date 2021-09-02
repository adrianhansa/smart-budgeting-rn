import React, { useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { getAccounts } from "../../redux/actions/accountActions";
import { createAccount } from "../../redux/actions/accountActions";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Formik } from "formik";

const AddExpense = () => {
  const schemaValidation = yup.object({
    //account, amount, description, date
    amount: yup.string().required(),
    account: yup.string().required(),
    description: yup.string().required(),
  });
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.accounts);
  useEffect(() => {
    dispatch(getAccounts());
    console.log(accounts);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <Formik
        initialValues={{ amount: "hi", account: "", description: "" }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(createAccount(values));
        }}
        schemaValidation={schemaValidation}
      >
        {(props) => {
          return (
            <>
              <TextInput
                placeholder="amount"
                value={props.values.amount}
                onChangeText={props.handleChange("amount")}
                onBlur={props.handleBlur("amount")}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
});

export default AddExpense;
