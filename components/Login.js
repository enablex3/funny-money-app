import React, { useState } from "react";
import { StyleSheet, Text, Image, View, TextInput } from "react-native";

const icon = require("../assets/fmIcon.jpg");

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password:"
          placeholderTextColor="#555"
          secureTextEntry
          style={lStyles.textInput}
          onChangeText={text => setPassword(text)}
        />
        <Text style={lStyles.lButton} onPress={() => props.navigation.navigate("Home", { email })}>
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
