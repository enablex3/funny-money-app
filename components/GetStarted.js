import React from "react";
import { StyleSheet, Text, Image, View, TextInput } from "react-native";
import { connect } from "react-redux";
import { setFullName, setDisplayName, setEmail, setPassword, setConfirmPassword } from "../store/actions/currentUser";

const icon = require("../assets/fmIcon.jpg");

const gsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
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
    marginTop: 30,
    marginLeft: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9c2c98"
  },
  logo: {
    height: 100,
    width: 100
  }
});

function GetStarted(props) {
  return (
    <View style={gsStyles.container}>
      <View style={gsStyles.header}>
        <Image source={icon} style={gsStyles.logo} />
      </View>
      <Text style={gsStyles.gsText}>Create a free account to get started.</Text>
      <Text style={gsStyles.gsText2}>FunnyMoney does not share your private information with anyone.</Text>
      <View style={gsStyles.gsForm}>
        <TextInput
          placeholder="Full Name:"
          placeholderTextColor="#555"
          style={gsStyles.textInput}
          onChangeText={text => props.setFullName(text)}
        />
        <TextInput
          placeholder="Display Name:"
          placeholderTextColor="#555"
          style={gsStyles.textInput}
          onChangeText={text => props.setDisplayName(text)}
        />
        <TextInput
          placeholder="Email Address:"
          placeholderTextColor="#555"
          style={gsStyles.textInput}
          onChangeText={text => props.setEmail(text)}
        />
        <TextInput
          placeholder="Password:"
          placeholderTextColor="#555"
          secureTextEntry
          style={gsStyles.textInput}
          onChangeText={text => props.setPassword(text)}
        />
        <TextInput
          placeholder="Confirm Password:"
          placeholderTextColor="#555"
          secureTextEntry
          style={gsStyles.textInput}
          onChangeText={text => props.setConfirmPassword(text)}
        />
        <Text
          style={gsStyles.gsButton}
          onPress={() => props.navigation.navigate("Home", { displayName: props.displayName })}>
          Get Started
        </Text>
      </View>
      <Text style={gsStyles.gsText}>Already have an account?</Text>
      <Text style={gsStyles.gsLoginLink} onPress={() => props.navigation.navigate("Login")}>
        Login
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({
  displayName: state.currentUser.displayName
});
const mapDispatchToProps = dispatch => ({
  setFullName: fullName => dispatch(setFullName(fullName)),
  setDisplayName: displayName => dispatch(setDisplayName(displayName)),
  setEmail: email => dispatch(setEmail(email)),
  setPassword: password => dispatch(setPassword(password)),
  setConfirmPassword: confirmPassword => dispatch(setConfirmPassword(confirmPassword))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetStarted);
