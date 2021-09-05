import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { getAccount, updateAccount } from "../../redux/actions/accountActions";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

const EditAccount = ({ route, navigation }) => {
  const validationSchema = yup.object({
    name: yup.string().required(),
  });
  const dispatch = useDispatch();
  const { account, loading, success, error } = useSelector(
    (state) => state.accountDetails
  );
  useEffect(() => {
    dispatch(getAccount(route.params.slug));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>EditAccount</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : success ? (
          <Formik
            initialValues={{ name: account.name }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(updateAccount(account.slug, values));
              navigation.navigate("Accounts");
            }}
          >
            {(props) => {
              return (
                <>
                  <TextInput
                    value={props.values.name}
                    onChangeText={props.handleChange("name")}
                    onBlur={props.handleBlur("name")}
                    style={styles.textInput}
                  />
                  <Pressable onPress={props.handleSubmit}>
                    <Text>Update</Text>
                  </Pressable>
                </>
              );
            }}
          </Formik>
        ) : (
          <Text>{error}</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    // flexGrow: 1,
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
});

export default EditAccount;
