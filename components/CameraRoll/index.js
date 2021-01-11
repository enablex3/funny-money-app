import React, { useEffect } from "react";
import { Button, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

const CameraRoll = ({ buttonColor, setProfilePicture, onSelect }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
      onSelect();
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button color={buttonColor} title="Camera roll" onPress={pickImage} />
    </View>
  );
};

export default CameraRoll;
