import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import LatestPredictions from "./Predictions/LatestPredictions";
import PastPredictions from "./Predictions/PastPredictions";
import News from "./News";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    height: 90,
    backgroundColor: "black",
    flexDirection: "row",
    borderWidth: 1,
    borderBottomColor: "#9c2c98"
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
  const { displayName, rank, newPredictions, pastPredictions, currency, accuracy } = props;

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
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <Text style={{ color: "azure", textAlign: "center", marginTop: 10 }}>Latest predictions</Text>
           { Object.keys(newPredictions).length > 0
             ? <LatestPredictions />
             : <View>
                <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>You don't have any predictions yet.</Text>
                <Button title="Create a new prediction" onPress={() => props.navigation.navigate("Predict")}/>
              </View>
           }
          <Text style={{ color: "azure", textAlign: "center", marginTop: 10 }}>Past predictions</Text>
          { Object.keys(pastPredictions).length > 0
            ?  <PastPredictions />
            : <View>
                <Text style={{ color: "azure", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>You have no past predictions.</Text>
              </View>
          }

          <Text style={{ color: "azure", textAlign: "center", marginTop: 10 }}>Latest News</Text>
          <News />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const mapStateToProps = state => {
  const { displayName, fullName, email, rank, newPredictions, pastPredictions, currency, accuracy } = state.currentUser;
  return { displayName, fullName, email, rank, newPredictions, pastPredictions, currency, accuracy };
};

export default connect(mapStateToProps)(Home);
