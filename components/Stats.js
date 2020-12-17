import React from "react";
import { StyleSheet, Text, View } from "react-native";

const statsStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 50
  },
  text: {
    margin: 10,
    fontFamily: "Staatliches_400Regular",
    fontSize: 25
  },
  text2: {
    textAlign: "center",
    fontSize: 45
  }
});

function Stats(props) {
  const { displayName, rank, currency, newPredictions, pastPredictions, accuracy } = props;

  return (
    <View style={statsStyles.container}>
      <Text style={statsStyles.text2}>
        {displayName}
        's Stats:
      </Text>
      <Text style={statsStyles.text}>
        Rank:
        {rank}
      </Text>
      <Text style={statsStyles.text}>
        Currency:
        {currency}
      </Text>
      <Text style={statsStyles.text}>
        New Predictions:
        {JSON.stringify(newPredictions)}
      </Text>
      <Text style={statsStyles.text}>
        Past Predictions:
        {JSON.stringify(pastPredictions)}
      </Text>
      <Text style={statsStyles.text}>
        Accuracy:
        {accuracy}
      </Text>
    </View>
  );
}

export default Stats;
