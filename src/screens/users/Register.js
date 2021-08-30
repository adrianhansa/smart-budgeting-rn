import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { register } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Formik } from "formik";

const Register = ({ navigation }) => {
  const schemaValidation = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required().min(6),
    passwordVerify: yup.string().required(),
  });
  const dispatch = useDispatch();
  const { loading, success, user, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (success) console.log("Authenticated form register");
  }, [dispatch, success]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Register</Text>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            passwordVerify: "",
          }}
          schemaValidation={schemaValidation}
          onSubmit={(values) => dispatch(register(values))}
        >
          {(props) => {
            return (
              <>
                <TextInput
                  placeholder="Name"
                  style={styles.textInput}
                  value={props.values.name}
                  onChangeText={props.handleChange("name")}
                  onBlur={props.handleBlur("name")}
                />
                <Text style={styles.error}>
                  {props.touched.name && props.errors.name}
                </Text>
                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                />
                <Text style={styles.error}>
                  {props.touched.email && props.errors.email}
                </Text>
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  secureTextEntry
                />
                <Text style={styles.error}>
                  {props.touched.password && props.errors.password}
                </Text>
                <TextInput
                  placeholder="Verify password"
                  style={styles.textInput}
                  secureTextEntry
                  value={props.values.passwordVerify}
                  onChangeText={props.handleChange("passwordVerify")}
                  onBlur={props.handleBlur("passwordVerify")}
                />
                <Text style={styles.error}>
                  {props.touched.passwordVerify && props.errors.passwordVerify}
                </Text>
                <TouchableOpacity
                  style={styles.buttonWrapper}
                  onPress={() => props.handleSubmit()}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <View style={styles.otherScreenWrapper}>
                  <Text>Already have an account ?</Text>
                  <Button
                    title="Sign In"
                    onPress={() => navigation.navigate("Login")}
                  />
                </View>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    width: Dimensions.get("window").width,
  },
  title: { fontSize: 26, marginBottom: 20, color: "#3c9978" },
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

export default Register;
