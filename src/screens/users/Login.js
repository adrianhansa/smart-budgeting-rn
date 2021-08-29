import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, success, user, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      console.log("Authenticated");
    }
  }, [dispatch, success]);

  const schemaValidation = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(6).required(),
    passwordVerify: yup.string().required(),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        schemaValidation={schemaValidation}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {(props) => {
          return (
            <>
              <TextInput
                placeholder="Email"
                value={props.values.email}
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
                autoFocus
                style={styles.textInput}
              />
              <Text style={styles.error}>
                {props.touched.email && props.errors.email}
              </Text>
              <TextInput
                placeholder="Password"
                value={props.values.password}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                secureTextEntry
                style={styles.textInput}
              />
              <Text style={styles.error}>
                {props.touched.password && props.errors.password}
              </Text>
              <TouchableOpacity
                onPress={() => props.handleSubmit()}
                style={styles.buttonWrapper}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  title: { fontSize: 36 },
  error: { color: "red" },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    width: "100%",
    marginBottom: 10,
  },
  buttonText: { fontSize: 24 },
  buttonWrapper: {
    padding: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
  },
});

export default Login;
