import React from "react";
import { StyleSheet, Text, Image, View, TextInput, Platform } from "react-native";
import { connect } from "react-redux";
import { setEmail, setPassword } from "../store/actions/currentUser";

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
  return (
    <View style={lStyles.container}>
      <View style={lStyles.header}>
        <Image source={icon} style={lStyles.logo} />
      </View>
      <Text style={lStyles.lText}>Login to your account.</Text>
      <View style={lStyles.lForm}>
        <TextInput
          placeholder="Email Address:"
          placeholderTextColor="#555"
          style={lStyles.textInput}
          onChangeText={text => props.setEmail(text)}
        />
        <TextInput
          placeholder="Password:"
          placeholderTextColor="#555"
          secureTextEntry
          style={lStyles.textInput}
          onChangeText={text => props.setPassword(text)}
        />
        <Text style={lStyles.lButton} onPress={() => props.navigation.navigate("AppNavigation")}>
          Login
        </Text>
      </View>
      <Text style={lStyles.lText}>Don't have an account?</Text>
      <Text style={lStyles.lGSLink} onPress={() => props.navigation.navigate("Get Started")}>
        Get Started
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({ email: state.currentUser.email });
const mapDispatchToProps = dispatch => ({
  setEmail: email => dispatch(setEmail(email)),
  setPassword: password => dispatch(setPassword(password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
