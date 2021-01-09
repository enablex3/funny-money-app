import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Header from "./Header";

const profileStyles = StyleSheet.create({
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
  pText: {
    borderBottomWidth: 10,
    borderBottomColor: "#333",
    color: "azure",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    fontFamily: "Staatliches_400Regular"
  },
  tOp: { 
    borderBottomWidth: 1, 
    borderBottomColor: "azure",
    justifyContent: "flex-end"
  }
});

function Profile(props) {
  const { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy } = props;

  return (
    <View style={profileStyles.container}>
      <Header navigation={props.navigation} />
      <ScrollView>
        <TouchableOpacity style={profileStyles.tOp}>
          <Text style={profileStyles.pText}>Change Profile Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.tOp}>
          <Text style={profileStyles.pText}>Set App Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.tOp}>
          <Text style={profileStyles.pText}>Update Your Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  const { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy } = state.currentUser;
  return { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy };
};

export default connect(mapStateToProps)(Profile);
