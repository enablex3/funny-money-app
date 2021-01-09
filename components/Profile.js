import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Header from "./Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
    color: "azure",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    fontFamily: "Staatliches_400Regular"
  },
  pTextInfl: {
    color: "#9c2c98",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    fontFamily: "Staatliches_400Regular"
  },
  pTextDisabled: {
    color: "gray",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    fontFamily: "Staatliches_400Regular"
  },
  tOp: { 
    borderBottomWidth: 1, 
    borderBottomColor: "azure",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  tOpInfl: { 
    borderBottomWidth: 1, 
    borderBottomColor: "#9c2c98",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  mIcon: {
    justifyContent: "flex-end",
    marginTop: 15
  }
});

function Profile(props) {
  const { displayName, email, rank, newPredictions, pastPredictions, currency, accuracy } = props;

  const influenceRank = 30;

  const isInfluencerRank = () => {
    if ( rank >= influenceRank ) {
      return (
        <TouchableOpacity style={profileStyles.tOpInfl}>
          <Text style={profileStyles.pTextInfl}>Influencer</Text>
          <MaterialCommunityIcons name="chevron-right" color="#9c2c98" size={30} style={profileStyles.mIcon} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={profileStyles.tOp} disabled={true}>
          <Text style={profileStyles.pTextDisabled}>Influencer (must be at least rank {influenceRank})</Text>
          <MaterialCommunityIcons name="chevron-right" color="gray" size={30} style={profileStyles.mIcon} />
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={profileStyles.container}>
      <Header navigation={props.navigation} />
      <ScrollView>
        <TouchableOpacity style={profileStyles.tOp}>
          <Text style={profileStyles.pText}>Change Profile Picture</Text>
          <MaterialCommunityIcons name="chevron-right" color="azure" size={30} style={profileStyles.mIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.tOp}>
          <Text style={profileStyles.pText}>Set App Theme</Text>
          <MaterialCommunityIcons name="chevron-right" color="azure" size={30} style={profileStyles.mIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.tOp}>
          <Text style={profileStyles.pText}>Reset Your Password</Text>
          <MaterialCommunityIcons name="chevron-right" color="azure" size={30} style={profileStyles.mIcon} />
        </TouchableOpacity>
        {isInfluencerRank()}
        <TouchableOpacity style={profileStyles.tOp}>
          <Text style={profileStyles.pText}>Change Currency Preference</Text>
          <MaterialCommunityIcons name="chevron-right" color="azure" size={30} style={profileStyles.mIcon} />
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
