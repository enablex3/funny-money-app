import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import Stats from "./Stats";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    height: 80,
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
  }
});

function Home(props) {
  const { displayName, rank, currency, newPredictions, pastPredictions, accuracy } = props;

  return (
    <View style={homeStyles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={homeStyles.header}>
            <View style={{ flex: 1 }}>
              <Text style={homeStyles.name}>{displayName}</Text>
              <Text style={homeStyles.rank}>
                Rank:
                {rank}
              </Text>
            </View>
          </View>
          <LinearGradient style={homeStyles.headerShadow} colors={["black", "#9c2c98"]}>
            <Text style={{ color: "azure" }}>Home Screen</Text>
          </LinearGradient>
          <Stats
            displayName={displayName}
            rank={rank}
            currency={currency}
            newPredictions={newPredictions}
            pastPredictions={pastPredictions}
            accuracy={accuracy}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const mapStateToProps = state => {
  const { displayName, rank, currency, newPredictions, pastPredictions, accuracy } = state.currentUser;
  return { displayName, rank, currency, newPredictions, pastPredictions, accuracy };
};

export default connect(mapStateToProps)(Home);
