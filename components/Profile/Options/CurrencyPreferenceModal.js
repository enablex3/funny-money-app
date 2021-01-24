import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableOpacityBase } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 100,
    flex: 1
  },
  currentContainer: {
    flexDirection: "row"
  },
  text: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10
  },
  setButtonText: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 25,
    color: "black",
    textAlign: "center"
  },
  setButton: {
    overflow: "hidden",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1
  }
});

function CurrencyPreferenceModal(props) {
  const { primaryTextColor, purpleTheme, currency } = props;
  return (
    <View style={styles.container}>
      <View style={styles.currentContainer}>
        <Text style={[styles.text, {color: primaryTextColor}]}>Currency:</Text>
        <Text style={[styles.text, {color: primaryTextColor}]}>{currency}</Text>
      </View>
      <View style={styles.currentContainer}>
        <Text style={[styles.text, {color: primaryTextColor}]}>Change To:</Text>
        <TextInput placeholder="Type Currency..." placeholderTextColor="#555" place style={[styles.text, {color: primaryTextColor, width: "100%"}]} />
      </View>
      <TouchableOpacity style={styles.setButton}>
          <Text style={[styles.setButtonText, { backgroundColor: purpleTheme }]}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => {
  const { primaryTextColor, backgroundColor, purpleTheme } = state.theme;
  const { currency } = state.currentUser;
  return { primaryTextColor, backgroundColor, currency, purpleTheme };
};

export default connect(mapStateToProps)(CurrencyPreferenceModal);
