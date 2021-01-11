import React from "react";
import { StyleSheet, Text, Image, View, TextInput, Platform } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import FetchingIndicator from "./FetchingIndicator";
import ResetPasswordForm from "./ResetPasswordForm";
import { getUser } from "../store/actions/currentUser";
import { showResetPasswordForm } from "../store/actions";
import { LoginSchema } from "../utils/validation";

const icon = require("../assets/fmIcon.jpg");

const lStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  lText: {
    color: "azure",
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,
    fontFamily: "Staatliches_400Regular"
  },
  lText2: {
    color: "azure",
    textAlign: "center",
    marginTop: 10,
    fontSize: 10,
    fontWeight: "200"
  },
  lErrorText: {
    color: "red"
  },
  lGSLink: {
    color: "#9c2c98",
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Staatliches_400Regular"
  },
  lButton: {
    color: "black",
    backgroundColor: "#9c2c98",
    textAlign: "center",
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 25,
    fontFamily: "Staatliches_400Regular"
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    color: "azure",
    fontSize: 20,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 10,
    fontFamily: "Staatliches_400Regular"
  },
  lForm: {
    margin: "auto",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9c2c98",
    width: Platform.OS === "ios" || Platform.OS === "android" ? "100%" : "50%"
  },
  logo: {
    height: 100,
    width: 100
  }
});

function Login(props) {
  const { serverErrors, fetching, shouldShowResetPasswordForm, showResetForm } = props;

  return (
    <View style={lStyles.container}>
      <View style={lStyles.header}>
        <Image source={icon} style={lStyles.logo} />
      </View>
      <Text style={lStyles.lText}>Login to your account.</Text>
      {serverErrors.system ? <Text style={lStyles.lErrorText}>{serverErrors.system}</Text> : null}
      {serverErrors.incorrectEmailOrPassword ? (
        <Text style={lStyles.lErrorText}>{serverErrors.incorrectEmailOrPassword}</Text>
      ) : null}
      <FetchingIndicator fetching={fetching} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          props.getUser(values.email, () => {
            props.navigation.navigate("AppNavigation");
          });
        }}>
        {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
          <View style={lStyles.lForm}>
            <TextInput
              placeholder="Email Address:"
              placeholderTextColor="#555"
              style={lStyles.textInput}
              onChangeText={handleChange("email")}
              value={values.email}
              onBlur={handleBlur("email")}
            />
            {errors.email && touched.email ? <Text style={lStyles.lErrorText}>{errors.email}</Text> : null}
            <TextInput
              placeholder="Password:"
              placeholderTextColor="#555"
              secureTextEntry
              style={lStyles.textInput}
              onChangeText={handleChange("password")}
              value={values.password}
              onBlur={handleBlur("password")}
            />
            {errors.password && touched.password ? <Text style={lStyles.lErrorText}>{errors.password}</Text> : null}
            <Text style={lStyles.lButton} onPress={handleSubmit}>
              Login
            </Text>
          </View>
        )}
      </Formik>
      {shouldShowResetPasswordForm ? (
        <ResetPasswordForm />
      ) : (
        <Text style={lStyles.lText} onPress={showResetForm}>
          Forgot Password?
        </Text>
      )}
      <Text style={lStyles.lText}>Don't have an account?</Text>
      <Text style={lStyles.lGSLink} onPress={() => props.navigation.navigate("Get Started")}>
        Get Started
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({
  serverErrors: state.currentUser.errors,
  fetching: state.currentUser.fetching,
  shouldShowResetPasswordForm: state.app.shouldShowResetPasswordForm
});

const mapDispatchToProps = dispatch => ({
  getUser: (email, successCallback) => dispatch(getUser(email, successCallback)),
  showResetForm: () => dispatch(showResetPasswordForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
