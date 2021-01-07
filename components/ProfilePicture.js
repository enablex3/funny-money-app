import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import ProfilePicture from "react-native-profile-picture";

const defaultPic = require("../assets/blankAvatar.png");

const profilePicStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: "flex-end"
    },
    name: {
        fontFamily: "Staatliches_400Regular",
        color: "azure",
        fontSize: 10,
    }
});

function ProfilePic(props) {
    const { profilePic, displayName } = props;

    profilePicDestination = ( profilePic === "none" ) ? defaultPic : profilePic;
  
    return (
        <View style={profilePicStyles.container}>
            <ProfilePicture
                isPicture={true}
                requirePicture={defaultPic}
                shape='circle'
            />
            <Text style={profilePicStyles.name}>
                {displayName}
            </Text>
        </View>
    );
  }
  
  const mapStateToProps = state => {
    const { profilePic, displayName } = state.currentUser;
    return { profilePic, displayName };
  };
  
  export default connect(mapStateToProps)(ProfilePic);