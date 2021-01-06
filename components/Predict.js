import React from "react";
import { StyleSheet, Text, View, Platform, TextInput, ScrollView } from "react-native";
import { connect } from "react-redux";
import dateFormat from "dateformat";
import Calendar from "./Calendar";
import FetchingIndicator from "./FetchingIndicator";
import { setNameOrSymbol, setPrice, createPrediction } from "../store/actions/prediction";
import Header from "./Header";

const predictStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  input: {
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
  }
});

function Predict({
  predictionNameOrSymbol,
  setPredictionNameOrSymbol,
  predictionDate,
  predictionPrice,
  setPredictionPrice,
  createNewPrediction,
  fetching,
  navigation
}) {
  return (
    <View style={predictStyles.container}>
      <Header />
      <ScrollView>
        <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
          Start a new prediction.
        </Text>
        <View style={predictStyles.form}>
          <TextInput
            placeholder="Name or Symbol"
            placeholderTextColor="#555"
            style={predictStyles.input}
            onChangeText={setPredictionNameOrSymbol}
            value={predictionNameOrSymbol}
          />
          <TextInput
            placeholder="Price"
            placeholderTextColor="#555"
            style={predictStyles.input}
            onChangeText={setPredictionPrice}
            value={predictionPrice}
          />
          <FetchingIndicator fetching={fetching} />
          <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
            Date of Prediction Outcome
          </Text>
          <Calendar />
          <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
            {dateFormat(predictionDate, "dddd, mmmm dS, yyyy")}
          </Text>
          <Text
            style={predictStyles.button}
            onPress={() => {
              createNewPrediction(
                { nameOrSymbol: predictionNameOrSymbol, date: predictionDate, price: predictionPrice },
                () => {
                  navigation.navigate("Home");
                }
              );
            }}>
            Create Prediction
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  const { date, nameOrSymbol, price, fetching, error } = state.prediction;
  return { predictionDate: date, predictionNameOrSymbol: nameOrSymbol, predictionPrice: price, fetching, error };
};

const mapDispatchToProps = dispatch => ({
  setPredictionNameOrSymbol: nameOrSymbol => dispatch(setNameOrSymbol(nameOrSymbol)),
  setPredictionPrice: price => dispatch(setPrice(price)),
  createNewPrediction: (prediction, successCallback) => dispatch(createPrediction(prediction, successCallback))
});

export default connect(mapStateToProps, mapDispatchToProps)(Predict);
