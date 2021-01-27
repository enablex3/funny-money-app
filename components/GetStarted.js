import React from "react";
import { useMutation, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, Image, View, TextInput, Platform, ImageBackground, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import FetchingIndicator from "./FetchingIndicator";
import { setUser } from "../store/actions/currentUser";
import { SignupSchema } from "../utils/validation";
import { HOST } from "../constants";

const icon = require("../assets/fmIcon.jpg");
const appBackgroundImage = require("../assets/appBackground.jpg");

const gsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imgBack: {
    flex: 1,
    resizeMode: "cover"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  gsText: {
    color: "azure",
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,
    fontFamily: "Staatliches_400Regular"
  },
  gsText2: {
    color: "azure",
    textAlign: "center",
    marginTop: 10,
    fontSize: 10,
    fontWeight: "200"
  },
  gsErrorText: {
    color: "red"
  },
  gsLoginLink: {
    color: "#9c2c98",
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Staatliches_400Regular"
  },
  gsButton: {
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
  gsForm: {
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

const CREATE_USER = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $displayName: String!
    $fullName: String!
    $currency: String!
    $profilePicture: String!
  ) {
    createUser(
      email: $email
      password: $password
      displayName: $displayName
      fullName: $fullName
      currency: $currency
      profilePicture: $profilePicture
    ) {
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

function GetStarted({ navigation, setCurrentUser }) {
  const [createUser, { data, error, loading }] = useMutation(CREATE_USER);

  if (data) setCurrentUserAndToken({ currentUser: data.createUser, setCurrentUser, navigation });

  return (
    <View style={gsStyles.container}>
      <ImageBackground source={appBackgroundImage} style={gsStyles.imgBack}>
        <ScrollView>
          <View style={gsStyles.header}>
            <Image source={icon} style={gsStyles.logo} />
          </View>
          <Text style={gsStyles.gsText}>Create a free account to get started.</Text>
          {error && <Text style={gsStyles.gsErrorText}>{JSON.stringify(error)}</Text>}
          <FetchingIndicator fetching={loading} />
          <ScrollView>
            <Formik
              initialValues={{ fullName: "", displayName: "", email: "", password: "", confirmPassword: "" }}
              validationSchema={SignupSchema}
              onSubmit={async values => {
                try {
                  createUser({
                    variables: { ...values, currency: "USD", profilePicture: `${HOST}/images/blankAvatar.png` }
                  });
                } catch (err) {
                  console.log(err);
                }
              }}>
              {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                <View style={gsStyles.gsForm}>
                  <TextInput
                    placeholder="Full Name:"
                    placeholderTextColor="gray"
                    style={gsStyles.textInput}
                    onChangeText={handleChange("fullName")}
                    value={values.fullName}
                    onBlur={handleBlur("fullName")}
                  />
                  {errors.fullName && touched.fullName ? (
                    <Text style={gsStyles.gsErrorText}>{errors.fullName}</Text>
                  ) : null}
                  <TextInput
                    placeholder="Display Name:"
                    placeholderTextColor="gray"
                    style={gsStyles.textInput}
                    onChangeText={handleChange("displayName")}
                    value={values.displayName}
                    onBlur={handleBlur("displayName")}
                  />
                  {errors.displayName && touched.displayName ? (
                    <Text style={gsStyles.gsErrorText}>{errors.displayName}</Text>
                  ) : null}
                  <TextInput
                    placeholder="Email Address:"
                    placeholderTextColor="gray"
                    style={gsStyles.textInput}
                    onChangeText={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur("email")}
                  />
                  {errors.email && touched.email ? <Text style={gsStyles.gsErrorText}>{errors.email}</Text> : null}
                  <TextInput
                    placeholder="Password:"
                    placeholderTextColor="gray"
                    secureTextEntry
                    style={gsStyles.textInput}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    onBlur={handleBlur("password")}
                  />
                  {errors.password && touched.password ? (
                    <Text style={gsStyles.gsErrorText}>{errors.password}</Text>
                  ) : null}
                  <TextInput
                    placeholder="Confirm Password:"
                    placeholderTextColor="gray"
                    secureTextEntry
                    style={gsStyles.textInput}
                    onChangeText={handleChange("confirmPassword")}
                    value={values.confirmPassword}
                    onBlur={handleBlur("confirmPassword")}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <Text style={gsStyles.gsErrorText}>{errors.confirmPassword}</Text>
                  ) : null}
                  <Text style={gsStyles.gsButton} onPress={handleSubmit}>
                    Get Started
                  </Text>
                </View>
              )}
            </Formik>
          </ScrollView>
          <Text style={gsStyles.gsText}>Already have an account?</Text>
          <Text style={gsStyles.gsLoginLink} onPress={() => navigation.navigate("Login")}>
            Login
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(GetStarted);
