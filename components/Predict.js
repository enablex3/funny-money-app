import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput, Button } from "react-native";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { setDate, setNameOrSymbol } from "../store/actions/prediction";
import Header from "./Header";
import "react-datepicker/dist/react-datepicker.css";

const predictStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  nameOrSymbolInput: {
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
  button: {
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
  text: {
    marginTop: 5,
    color: "azure"
  },
  form: {
    margin: "auto",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9c2c98",
    width: Platform.OS === "ios" || Platform.OS === "android" ? "100%" : "50%"
  },
  datePicker: {
    marginLeft: 5
  }
});

function Predict({ predictionDate, setPredictionDate, predictionNameOrSymbol, setPredictionNameOrSymbol }) {
  return (
    <View style={predictStyles.container}>
      <SafeAreaView>
        <Header />
        <View style={predictStyles.form}>
          <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
            Start a new prediction.
          </Text>
          <TextInput
            placeholder="Name or Symbol"
            placeholderTextColor="#555"
            style={predictStyles.nameOrSymbolInput}
            onChangeText={setPredictionNameOrSymbol}
            value={predictionNameOrSymbol}
          />
          {Platform.OS === "ios" || Platform.OS === "android" ? (
            <View>
              <Text>This component currently does not support ios and android</Text>
            </View>
          ) : (
            <View style={predictStyles.datePicker}>
              <Text style={predictStyles.text}>Prediction Outcome Date</Text>
              <DatePicker minDate={new Date()} selected={predictionDate} onChange={setPredictionDate} />
            </View>
          )}
          <Text style={predictStyles.button} onPress={() => null}>
            Create Prediction
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const mapStateToProps = state => {
  const { date, nameOrSymbol } = state.prediction;
  return { predictionDate: date, predictionNameOrSymbol: nameOrSymbol };
};

const mapDispatchToProps = dispatch => ({
  setPredictionDate: date => dispatch(setDate(date)),
  setPredictionNameOrSymbol: nameOrSymbol => dispatch(setNameOrSymbol(nameOrSymbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(Predict);
