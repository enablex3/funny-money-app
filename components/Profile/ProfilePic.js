import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfilePicture from "react-native-profile-picture";

let profilePicStyles = StyleSheet.create({
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
  const { profilePic, displayName, primaryTextColor } = props;

  const profilePicEl =
    profilePic === "none" ? (
      <MaterialCommunityIcons name="account-circle" color="grey" size={50} />
    ) : (
      <ProfilePicture isPicture URLPicture={profilePic} shape="rounded" />
    );

  return (
    <TouchableOpacity
      style={profilePicStyles.container}
      onPress={() => props.navigation.navigate("Profile")}
      activeOpacity={1}>
      {profilePicEl}
      <Text style={[profilePicStyles.name, {color: primaryTextColor}]}>{displayName}</Text>
    </TouchableOpacity>
  );
}

const mapStateToProps = state => {
  const { profilePic, displayName } = state.currentUser;
  const { primaryTextColor } = state.theme;
  return { profilePic, displayName, primaryTextColor };
};

export default connect(mapStateToProps)(ProfilePic);
