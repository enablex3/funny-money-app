import React from "react";
import { StyleSheet, Text, View, Platform, TextInput, ScrollView } from "react-native";
import { Formik } from "formik";
import Downshift from "downshift";
import { connect } from "react-redux";
import dateFormat from "dateformat";
import Calendar from "./Calendar";
import FetchingIndicator from "./FetchingIndicator";
import { createPrediction } from "../store/actions/prediction";
import Header from "./Header";
import { predictionSchema } from "../utils/validation";

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
    overflow: "hidden",
    fontSize: 25,
    fontFamily: "Staatliches_400Regular"
  },
  text: {
    marginTop: 5,
    color: "azure"
  },
  errorText: {
    color: "red"
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

const items = [
  { value: "XRP" },
  { value: "BTC" },
  { value: "APPLE" },
  { value: "GOLD" },
  { value: "EWT" },
  { value: "GSX" },
  { value: "AIRBNB" },
  { value: "SILVER" }
];

function Predict({ predictionDate, createNewPrediction, fetching, navigation }) {
  return (
    <View style={predictStyles.container}>
      <Header />
      <ScrollView>
        <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
          Start a new prediction.
        </Text>
        <Formik
          initialValues={{ nameOrSymbol: "", price: "" }}
          validationSchema={predictionSchema}
          onSubmit={values => {
            const { nameOrSymbol, price } = values;

            createNewPrediction({ date: predictionDate, nameOrSymbol, price }, () => {
              navigation.navigate("Home");
            });
          }}>
          {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
            <View style={predictStyles.form}>
              <Downshift itemToString={item => (item ? item.value : "")}>
                {({
                  getRootProps,
                  getInputProps,
                  getItemProps,
                  isOpen,
                  inputValue,
                  highlightedIndex,
                  selectedItem
                }) => (
                  <View {...getRootProps({}, { suppressRefError: true })}>
                    <TextInput
                      {...getInputProps()}
                      placeholder="Name or Symbol"
                      placeholderTextColor="#555"
                      style={predictStyles.input}
                      onChangeText={handleChange("nameOrSymbol")}
                      value={inputValue}
                      onBlur={handleBlur("nameOrSymbol")}
                    />
                    {isOpen
                      ? items
                          .filter(item => !inputValue || item.value.toUpperCase().includes(inputValue.toUpperCase()))
                          .map((item, index) => (
                            <Text
                              {...getItemProps({
                                key: item.value,
                                item,
                                style: {
                                  backgroundColor: highlightedIndex === index ? "lightgray" : "white",
                                  fontWeight: selectedItem === item ? "bold" : "normal"
                                },
                                index
                              })}>
                              {item.value}
                            </Text>
                          ))
                      : null}
                  </View>
                )}
              </Downshift>
              {errors.nameOrSymbol && touched.nameOrSymbol && (
                <Text style={predictStyles.errorText}>{errors.nameOrSymbol}</Text>
              )}
              <TextInput
                placeholder="Price"
                placeholderTextColor="#555"
                style={predictStyles.input}
                onChangeText={handleChange("price")}
                value={values.price}
                onBlur={handleBlur("price")}
              />
              {errors.price && touched.price && <Text style={predictStyles.errorText}>{errors.price}</Text>}
              <FetchingIndicator fetching={fetching} />
              <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
                Date of Prediction Outcome
              </Text>
              <Calendar />
              <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
                {dateFormat(predictionDate, "dddd, mmmm dS, yyyy")}
              </Text>
              <Text style={predictStyles.button} onPress={handleSubmit}>
                Create Prediction
              </Text>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  const { date, fetching, error } = state.prediction;
  return { predictionDate: date, fetching, error };
};

const mapDispatchToProps = dispatch => ({
  createNewPrediction: (prediction, successCallback) => dispatch(createPrediction(prediction, successCallback))
});

export default connect(mapStateToProps, mapDispatchToProps)(Predict);
