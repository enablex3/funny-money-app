import React, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import { Button, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

const MUTATION = gql`
  mutation ProfilePictureUpload($file: Upload!) {
    profilePictureUpload(file: $file) {
      text
    }
  }
`;

const CameraRoll = ({ buttonColor, setProfilePicture, onSelect }) => {
  const [mutate] = useMutation(MUTATION);

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
      const { uri } = result;
      const file = new ReactNativeFile({
        uri,
        name: "a.jpg",
        type: "image/jpeg"
      });

      await mutate({ variables: { file } });
      setProfilePicture(uri);
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
