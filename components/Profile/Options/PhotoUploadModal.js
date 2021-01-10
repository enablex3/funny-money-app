import React from "react";
import { StyleSheet, Button, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CameraRoll from "../../CameraRoll";
import { setProfilePic } from "../../../store/actions/currentUser";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 100,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black"
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    textAlign: "center"
  }
});

function PhotoUploadModal({ setProfilePicture }) {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="camera" color="azure" size={50} style={styles.icon} />
          <Button color="#9c2c98" title="Use camera" />
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="camera-image" color="azure" size={50} style={styles.icon} />
          <CameraRoll buttonColor="#9c2c98" setProfilePicture={setProfilePicture} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  setProfilePicture: profilePic => dispatch(setProfilePic(profilePic))
});

export default connect(null, mapDispatchToProps)(PhotoUploadModal);
