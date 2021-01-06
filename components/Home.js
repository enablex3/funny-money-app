import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Header from "./Header";
import LatestPredictions from "./Predictions/LatestPredictions";
import PastPredictions from "./Predictions/PastPredictions";
import News from "./News";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});

function Home(props) {
  const { newPredictions, pastPredictions } = props;

  return (
    <View style={homeStyles.container}>
      <Header />
      <ScrollView>
        <Text style={{ color: "azure", textAlign: "center", marginTop: 10 }}>Latest predictions</Text>
        {Object.keys(newPredictions).length > 0 ? (
          <LatestPredictions />
        ) : (
          <View>
            <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
              You don't have any predictions yet.
            </Text>
            <Button title="Create a new prediction" onPress={() => props.navigation.navigate("Predict")} />
          </View>
        )}
        <Text style={{ color: "azure", textAlign: "center", marginTop: 10 }}>Past predictions</Text>
        {Object.keys(pastPredictions).length > 0 ? (
          <PastPredictions />
        ) : (
          <View>
            <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
              You have no past predictions.
            </Text>
          </View>
        )}
        <Text style={{ color: "azure", textAlign: "center", marginTop: 10 }}>Latest News</Text>
        <News />
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  const { newPredictions, pastPredictions } = state.currentUser;
  return { newPredictions, pastPredictions };
};

export default connect(mapStateToProps)(Home);
