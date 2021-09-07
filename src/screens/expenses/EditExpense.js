import React, { useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getExpense, updateExpense } from "../../redux/actions/expenseActions";
import Loading from "../../components/Loading";

const EditExpense = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { loading, expense, success, error } = useSelector(
    (state) => state.expenseDetails
  );
  useEffect(() => {
    dispatch(getExpense(route.params.id));
  }, [dispatch]);
  const validationSchema = yup.object({
    account: yup.string().required(),
    amount: yup.string().required(),
    description: yup.string().required(),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EditExpense {route.params.id}</Text>
      <Pressable onPress={() => navigation.navigate("ExpensesScreen")}>
        {loading ? (
          <Loading />
        ) : success ? (
          <Formik
            onSubmit={(values) => {
              console.log(values);
            }}
            initialValues={{
              amount: expense.amount,
              description: expense.description,
              account: expense.account._id,
            }}
            validationSchema={validationSchema}
          >
            {(props) => {
              return (
                <>
                  <Text>{props.values.description}</Text>
                  <TextInput value={props.values.amount} />
                </>
              );
            }}
          </Formik>
        ) : (
          <Text>{error}</Text>
        )}

        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36 },
});

export default EditExpense;
