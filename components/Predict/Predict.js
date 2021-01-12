import React from "react";
import { StyleSheet, Text, View, Platform, TextInput, ScrollView } from "react-native";
import { Formik } from "formik";
import Downshift from "downshift";
import { RadioButton } from "react-native-paper";
import { connect } from "react-redux";
import dateFormat from "dateformat";
import Calendar from "../Calendar";
import FetchingIndicator from "../FetchingIndicator";
import { createPrediction, setVisibility } from "../../store/actions/prediction";
import Header from "../Header/Header";
import { predictionSchema } from "../../utils/validation";

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
    color: "azure",
    fontFamily: "Staatliches_400Regular"
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
  },
  sectionHeader: {
    color: "azure",
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold"
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

function Predict({
  predictionDate,
  createNewPrediction,
  fetching,
  visibility,
  navigation,
  primaryTextColor,
  backgroundColor,
  purpleTheme,
  setPredictionVisibility
}) {
  return (
    <View style={[predictStyles.container, { backgroundColor }]}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={[predictStyles.sectionHeader, { color: primaryTextColor }]}>Start a new prediction</Text>
        <Formik
          initialValues={{ nameOrSymbol: "", price: "", comment: "" }}
          validationSchema={predictionSchema}
          onSubmit={values => {
            createNewPrediction({ ...values, visibility, date: predictionDate }, () => {
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
                      style={[predictStyles.input, { color: primaryTextColor }]}
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
                style={[predictStyles.input, { color: primaryTextColor }]}
                onChangeText={handleChange("price")}
                value={values.price}
                onBlur={handleBlur("price")}
              />
              {errors.price && touched.price && <Text style={predictStyles.errorText}>{errors.price}</Text>}
              <TextInput
                placeholder="Comment"
                placeholderTextColor="#555"
                style={[predictStyles.input, { color: primaryTextColor, borderColor: "grey" }]}
                numberOfLines={4}
                onChangeText={handleChange("comment")}
                value={values.comment}
                multiline
              />
              <View>
                <Text style={[predictStyles.text, { fontSize: 20, color: primaryTextColor }]}>
                  Who Can See This Prediction?
                </Text>
                <Text
                  style={[predictStyles.text, { color: primaryTextColor }]}
                  onPress={() => setPredictionVisibility(0)}>
                  Everyone Can See
                  <RadioButton
                    value={0}
                    status={visibility === 0 ? "checked" : "unchecked"}
                    uncheckedColor="#9c2c98"
                    color="#9c2c98"
                    onPress={() => setPredictionVisibility(0)}
                  />
                </Text>
                <Text
                  style={[predictStyles.text, { color: primaryTextColor }]}
                  onPress={() => setPredictionVisibility(1)}>
                  You And Your Subscribers Can See
                  <RadioButton
                    value={1}
                    status={visibility === 1 ? "checked" : "unchecked"}
                    uncheckedColor="#9c2c98"
                    color="#9c2c98"
                    onPress={() => setPredictionVisibility(1)}
                  />
                </Text>
                <Text
                  style={[predictStyles.text, { color: primaryTextColor }]}
                  onPress={() => setPredictionVisibility(2)}>
                  Only You Can See
                  <RadioButton
                    value={2}
                    status={visibility === 2 ? "checked" : "unchecked"}
                    uncheckedColor="#9c2c98"
                    color="#9c2c98"
                    onPress={() => setPredictionVisibility(2)}
                  />
                </Text>
              </View>
              <FetchingIndicator fetching={fetching} />
              <Text style={[predictStyles.sectionHeader, { color: primaryTextColor }]}>Date of Prediction Outcome</Text>
              <Calendar />
              <Text style={[predictStyles.sectionHeader, { color: primaryTextColor }]}>
                {dateFormat(predictionDate, "dddd, mmmm dS, yyyy")}
              </Text>
              <Text style={[predictStyles.button, { backgroundColor: purpleTheme }]} onPress={handleSubmit}>
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
  const { date, fetching, error, visibility } = state.prediction;
  const { primaryTextColor, backgroundColor, purpleTheme } = state.theme;
  return { predictionDate: date, fetching, error, visibility, primaryTextColor, backgroundColor, purpleTheme };
};

const mapDispatchToProps = dispatch => ({
  createNewPrediction: (prediction, successCallback) => dispatch(createPrediction(prediction, successCallback)),
  setPredictionVisibility: visibility => dispatch(setVisibility(visibility))
});

export default connect(mapStateToProps, mapDispatchToProps)(Predict);
