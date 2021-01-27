import React from "react";
import { useMutation, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, Image, View, TextInput, Platform, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import { ScrollView } from "react-native-gesture-handler";
import FetchingIndicator from "./FetchingIndicator";
import ResetPasswordForm from "./ResetPasswordForm";
import { getUser, setUser } from "../store/actions/currentUser";
import { showResetPasswordForm } from "../store/actions";

import { LoginSchema } from "../utils/validation";

const icon = require("../assets/fmIconTransparent.png");
const appBackgroundImage = require("../assets/appBackground.jpg");

const lStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  imgBack: {
    flex: 1,
    resizeMode: "cover"
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
    width: 100,
    marginTop: 10
  }
});

const USER_SIGN_IN = gql`
  mutation UserSignIn($email: String!, $password: String!) {
    userSignIn(email: $email, password: $password) {
      id
      email
      displayName
      fullName
      rank
      accuracy
      currency
      profilePicture
      rate
      token
    }
  }
`;

const setCurrentUserAndToken = async ({ currentUser, setCurrentUser, navigation }) => {
  await AsyncStorage.setItem("token", currentUser.token);
  setCurrentUser(currentUser);
  navigation.navigate("AppNavigation");
};

function Login({ shouldShowResetPasswordForm, showResetForm, getCurrentUser, setCurrentUser, navigation }) {
  const [userSignIn, { data, loading, error }] = useMutation(USER_SIGN_IN);

  if (data) setCurrentUserAndToken({ currentUser: data.userSignIn, setCurrentUser, navigation });

  return (
    <View style={lStyles.container}>
      <ImageBackground source={appBackgroundImage} style={lStyles.imgBack}>
        <ScrollView>
          <View style={lStyles.header}>
            <Image source={icon} style={lStyles.logo} />
          </View>
          <Text style={lStyles.lText}>Login to your account.</Text>
          {error && <Text style={lStyles.lErrorText}>{JSON.stringify(error)}</Text>}
          <FetchingIndicator fetching={loading} />
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={async values => {
              getCurrentUser(values.email, () => {
                navigation.navigate("AppNavigation");
              });
              try {
                userSignIn({ variables: values });
              } catch (err) {
                console.log(err);
              }
            }}>
            {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
              <View style={lStyles.lForm}>
                <TextInput
                  placeholder="Email Address:"
                  placeholderTextColor="gray"
                  style={lStyles.textInput}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email ? <Text style={lStyles.lErrorText}>{errors.email}</Text> : null}
                <TextInput
                  placeholder="Password:"
                  placeholderTextColor="gray"
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
          <Text style={lStyles.lGSLink} onPress={() => navigation.navigate("Get Started")}>
            Get Started
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = state => ({ shouldShowResetPasswordForm: state.app.shouldShowResetPasswordForm });

const mapDispatchToProps = dispatch => ({
  getCurrentUser: (email, successCallback) => dispatch(getUser(email, successCallback)),
  setUser: user => dispatch(setUser(user)),
  showResetForm: () => dispatch(showResetPasswordForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
