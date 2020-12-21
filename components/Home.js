import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { connect } from "react-redux";
import { jsonToArray } from "../utils/jsonToArray";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    height: 90,
    backgroundColor: "black",
    flexDirection: "row"
  },
  headerShadow: {
    justifyContent: "center",
    alignItems: "center"
  },
  hText: {
    color: "azure",
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,
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
  logo: {
    height: 50,
    width: 50,
    justifyContent: "flex-start",
    marginLeft: 10
  },
  name: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 30,
    justifyContent: "flex-start"
  },
  rank: {
    fontFamily: "Staatliches_400Regular",
    color: "#9c2c98",
    fontSize: 20,
    justifyContent: "flex-end"
  },
  accuracy: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 15,
    justifyContent: "flex-end"
  },
  predictionNames: {
    color: "azure",
    fontSize: 30
  },
  predictionInfo: {
    color: "azure",
    fontSize: 20
  }
});

function Home(props) {
  const { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy } = props;
  const newPredictionsObject = jsonToArray(newPredictions);
  const pastPredictionsObject = jsonToArray(pastPredictions);

  return (
    <View style={homeStyles.container}>
      <SafeAreaView>
        <View style={homeStyles.header}>
          <View style={{ flex: 1 }}>
            <Text style={homeStyles.name}>{displayName}</Text>
            <Text style={homeStyles.rank}>
              Rank:
              {rank}
            </Text>
            <Text style={homeStyles.accuracy}>
              Accuracy:
              {`${accuracy * 100}%, Currency: ${currency}`}
            </Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 150}}>
          <Text style={{ color: 'blue'}}>Latest predictions</Text>
          {newPredictionsObject.map((prediction, idx) => (
            <View key={idx.toString()}>
              <Text style={homeStyles.predictionNames}>
                {prediction.name}
                {` ${prediction.value.type}`}
              </Text>
              <Text style={homeStyles.predictionInfo}>
                Predicted Price:
                {prediction.value.price}
              </Text>
              <Text style={homeStyles.predictionInfo}>
                Predicted Date:
                {prediction.value.date}
              </Text>
            </View>
          ))}
          <Text style={{ color: 'blue'}}>Past predictions</Text>
          {pastPredictionsObject.map((prediction, idx) => (
            <View key={idx.toString()}>
              <Text style={homeStyles.predictionNames}>
                {prediction.name}
                {` ${prediction.value.type}`}
              </Text>
              <Text style={homeStyles.predictionInfo}>
                Predicted Price:
                {prediction.value.price}
              </Text>
              <Text style={homeStyles.predictionInfo}>
                Predicted Date:
                {prediction.value.date}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const mapStateToProps = state => {
  const { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy } = state.currentUser;
  return { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy };
};

export default connect(mapStateToProps)(Home);
