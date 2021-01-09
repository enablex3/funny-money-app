import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import ProfilePicture from "react-native-profile-picture";
import { TouchableOpacity } from "react-native-gesture-handler";

const defaultPic = require("../assets/blankAvatar.png");

const profilePicStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    name: {
        fontFamily: "Staatliches_400Regular",
        color: "azure",
        fontSize: 10,
    }
});

function ProfilePic(props) {
    const { profilePic, displayName } = props;

    const profilePicDestination = ( profilePic === "none" ) ? defaultPic : profilePic;
    const shape = "rounded";

    const picRender = () => {
        if ( profilePic == "none" ) {
            return (
                <ProfilePicture
                    isPicture={true}
                    requirePicture={profilePicDestination}
                    shape={shape}
                />
            )
        } else {
            return (
                <ProfilePicture
                    isPicture={true}
                    URLPicture={profilePicDestination}
                    shape={shape}
                />
            )
        }
    };
  
    return (
        <TouchableOpacity style={profilePicStyles.container} onPress={() => props.navigation.navigate("Profile")} activeOpacity={1}>
            { picRender() }
            <Text style={profilePicStyles.name}>
                {displayName}
            </Text>
        </TouchableOpacity>
    );
  }
  
  const mapStateToProps = state => {
    const { profilePic, displayName } = state.currentUser;
    return { profilePic, displayName };
  };
  
  export default connect(mapStateToProps)(ProfilePic);