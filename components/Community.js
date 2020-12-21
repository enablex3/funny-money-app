import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";

const communityStyles = StyleSheet.create({
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
  },
  accuracy: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 15,
    justifyContent: "flex-end"
  },
});

function Community(props) {
  const { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy } = props;

  return (
    <View style={communityStyles.container}>
      <SafeAreaView>
        <View style={communityStyles.header}>
          <View style={{ flex: 1 }}>
            <Text style={communityStyles.name}>{displayName}</Text>
            <Text style={communityStyles.rank}>
              Rank:
              {rank}
            </Text>
            <Text style={communityStyles.accuracy}>
              Accuracy:
              {`${accuracy * 100}%, Currency: ${currency}`}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const mapStateToProps = state => {
  const { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy } = state.currentUser;
  return { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy };
};

export default connect(mapStateToProps)(Community);
