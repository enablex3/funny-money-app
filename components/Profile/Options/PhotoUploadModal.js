import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TouchableOpacity, Platform } from "react-native";
import Modal from "modal-react-native-web";
import { connect } from "react-redux";
import { Overlay } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CameraRoll from "../../CameraRoll";
import ProfilePic from "../ProfilePic";
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
  },
  text: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,
    fontFamily: "Staatliches_400Regular"
  }
});

function PhotoUploadModal({ setProfilePicture }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };
  const buttonColor = "#9c2c98";

  return (
    <View style={styles.container}>
      <View>
        {Platform.OS === "web" ? (
          <Overlay ModalComponent={Modal} isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
            <Text style={styles.text}>Profile picture changed!</Text>
            <ProfilePic />
            <Button color={buttonColor} title="Ok" onPress={toggleOverlay} />
          </Overlay>
        ) : (
          <Overlay isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
            <Text style={styles.text}>Profile picture changed!</Text>
            <ProfilePic />
            <Button color={buttonColor} title="Ok" onPress={toggleOverlay} />
          </Overlay>
        )}
      </View>
      <View style={styles.column}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="camera" color="azure" size={50} style={styles.icon} />
          <Button color={buttonColor} title="Use camera" />
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="camera-image" color="azure" size={50} style={styles.icon} />
          <CameraRoll buttonColor={buttonColor} setProfilePicture={setProfilePicture} onSelect={toggleOverlay} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  setProfilePicture: profilePic => dispatch(setProfilePic(profilePic))
});

export default connect(null, mapDispatchToProps)(PhotoUploadModal);
