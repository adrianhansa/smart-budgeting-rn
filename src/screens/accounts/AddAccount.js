import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../redux/actions/accountActions";

const AddAccount = () => {
  const dispatch = useDispatch();
  const schemaValidation = yup.object({
    name: yup.string().required(),
  });

  const accountCreated = useSelector((state) => state);
  useEffect(() => {
    console.log(accountCreated);
  }, [accountCreated]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddAccount</Text>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values) => {
            dispatch(createAccount(values));
          }}
          schemaValidation={schemaValidation}
        >
          {(props) => {
            return (
              <>
                <TextInput
                  placeholder="Account name"
                  value={props.values.name}
                  onChangeText={props.handleChange("name")}
                  onBlur={props.handleBlur("name")}
                  style={styles.textInput}
                />
                <Text style={styles.error}>
                  {props.touched.nae && props.errors.name}
                </Text>
                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={styles.buttonWrapper}
                >
                  <Text style={styles.buttonText}>Create Account</Text>
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
export default AddAccount;
