import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../Header/Header";
import AppThemeModal from "./Options/AppThemeModal";
import PhotoUploadModal from "./Options/PhotoUploadModal";
import ResetPasswordForm from "../ResetPasswordForm";

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
  const { rank, navigation } = props;

  const influenceRank = 30;

  // track option clicks
  const [influenceClicked, setInfluenceClicked] = useState(false);
  const [picClicked, setPicClicked] = useState(false);
  const [themeClicked, setThemeClicked] = useState(false);
  const [passClicked, setPassClicked] = useState(false);
  const [currencyClicked, setCurrencyClicked] = useState(false);

  const isInfluencerRank = () => {
    if (rank >= influenceRank) {
      return (
        <TouchableOpacity
          style={profileStyles.tOp}
          onPress={() => setInfluenceClicked(!influenceClicked)}
          activeOpacity={1}>
          <Text style={profileStyles.pText}>Influencer</Text>
          <MaterialCommunityIcons
            name={influenceClicked ? "minus" : "plus-thick"}
            color="azure"
            size={30}
            style={profileStyles.mIcon}
          />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={profileStyles.tOp} disabled>
        <Text style={profileStyles.pTextDisabled}>
          Influencer (must be at least rank
          {influenceRank}
        </Text>
        <MaterialCommunityIcons name="plus-thick" color="gray" size={30} style={profileStyles.mIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={profileStyles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <TouchableOpacity style={profileStyles.tOp} onPress={() => setPicClicked(!picClicked)} activeOpacity={1}>
          <Text style={profileStyles.pText}>Change Profile Picture</Text>
          <MaterialCommunityIcons
            name={picClicked ? "minus" : "plus-thick"}
            color="azure"
            size={30}
            style={profileStyles.mIcon}
          />
        </TouchableOpacity>
        {picClicked ? <PhotoUploadModal /> : null}
        <TouchableOpacity style={profileStyles.tOp} onPress={() => setThemeClicked(!themeClicked)} activeOpacity={1}>
          <Text style={profileStyles.pText}>Set App Theme</Text>
          <MaterialCommunityIcons
            name={themeClicked ? "minus" : "plus-thick"}
            color="azure"
            size={30}
            style={profileStyles.mIcon}
          />
        </TouchableOpacity>
        {themeClicked ? <AppThemeModal /> : null}
        <TouchableOpacity style={profileStyles.tOp} onPress={() => setPassClicked(!passClicked)} activeOpacity={1}>
          <Text style={profileStyles.pText}>Reset Your Password</Text>
          <MaterialCommunityIcons
            name={passClicked ? "minus" : "plus-thick"}
            color="azure"
            size={30}
            style={profileStyles.mIcon}
          />
        </TouchableOpacity>
        {passClicked && <ResetPasswordForm />}
        {isInfluencerRank()}
        <TouchableOpacity
          style={profileStyles.tOp}
          onPress={() => setCurrencyClicked(!currencyClicked)}
          activeOpacity={1}>
          <Text style={profileStyles.pText}>Change Currency Preference</Text>
          <MaterialCommunityIcons
            name={currencyClicked ? "minus" : "plus-thick"}
            color="azure"
            size={30}
            style={profileStyles.mIcon}
          />
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
