import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput, Button } from "react-native";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { setDate, setNameOrSymbol } from "../store/actions/prediction";
import "react-datepicker/dist/react-datepicker.css";

const predictStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    height: 90,
    backgroundColor: "black"
  },
  nameOrSymbolInput: {
    width: Platform.OS === "ios" || Platform.OS === "android" ? "100%" : "50%",
    backgroundColor: "white",
    color: "black"
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
  }
});

function Predict({ predictionDate, setPredictionDate, predictionNameOrSymbol, setPredictionNameOrSymbol }) {
  return (
    <View style={predictStyles.container}>
      <SafeAreaView>
        <View style={predictStyles.header}>
          <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
            Start a new prediction.
          </Text>
          {Platform.OS === "ios" || Platform.OS === "android" ? (
            <View>
              <Text>This component currently does not support ios and android</Text>
            </View>
          ) : (
            <View>
              <Text>Name or Symbol:</Text>
              <TextInput
                style={predictStyles.nameOrSymbolInput}
                onChangeText={setPredictionNameOrSymbol}
                value={predictionNameOrSymbol}
              />
              <Text>Prediction Outcome Date</Text>
              <DatePicker selected={predictionDate} onChange={setPredictionDate} />
            </View>
          )}
          <Button style={predictStyles.button}>Create Prediction</Button>
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
