import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import ProfilePicture from "react-native-profile-picture";

const defaultPic = require("../../assets/blankAvatar.png");

const profilePicStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  name: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 10,
    textAlign: "center"
  }
});

function ProfilePic(props) {
  const { profilePic, displayName } = props;

  const profilePicDestination = profilePic === "none" ? defaultPic : profilePic;
  const shape = "rounded";

  const picRender = () => {
    if (profilePic === "none") {
      return <ProfilePicture isPicture requirePicture={profilePicDestination} shape={shape} />;
    }
    return <ProfilePicture isPicture URLPicture={profilePicDestination} shape={shape} />;
  };

  return (
    <TouchableOpacity
      style={profilePicStyles.container}
      onPress={() => props.navigation.navigate("Profile")}
      activeOpacity={1}>
      {picRender()}
      <Text style={profilePicStyles.name}>{displayName}</Text>
    </TouchableOpacity>
  );
}

const mapStateToProps = state => {
  const { profilePic, displayName } = state.currentUser;
  return { profilePic, displayName };
};

export default connect(mapStateToProps)(ProfilePic);
