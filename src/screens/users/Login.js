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
  Image,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";

const Login = ({ navigation }) => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logo}>
          <Text style={styles.header}>Let's make your money grow!</Text>
          <Image
            source={require("../../images/logo.jpg")}
            style={{ width: Dimensions.get("window").width }}
          />
          <Text style={styles.title}>Enter your credentials</Text>
        </View>

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
                  <Text style={styles.buttonText}>Access Account</Text>
                </TouchableOpacity>
                <View style={styles.otherScreenWrapper}>
                  <Text>Don't have an account ?</Text>
                  <Button
                    title="Sign Up"
                    onPress={() => navigation.navigate("Register")}
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
  title: { fontSize: 20, marginVertical: 15, color: "#3c9978" },
  logo: {
    width: Dimensions.get("window").width,
    flex: 1,
    alignItems: "center",
  },
  header: { padding: 20, fontSize: 30, width: "100%", textAlign: "center" },
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

export default Login;
