import React from "react";
import { StyleSheet, Button, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CameraRoll from "../../CameraRoll";

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

function PhotoUploadModal() {
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
          <CameraRoll buttonColor="#9c2c98" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PhotoUploadModal;
