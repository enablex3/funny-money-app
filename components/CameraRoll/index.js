/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import { Button, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import FetchingIndicator from "../FetchingIndicator";

const MUTATION = gql`
  mutation ProfilePictureUpload($file: Upload!) {
    profilePictureUpload(file: $file) {
      path
    }
  }
`;

const CameraRoll = ({ buttonColor, setProfilePicture, onSelect }) => {
  const [mutate, { data, error, loading }] = useMutation(MUTATION);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();

    if (data) {
      setProfilePicture(data.profilePictureUpload.path);
      onSelect();
    } else if (error) alert(JSON.stringify(error));
  }, [data, setProfilePicture]);

  const onChange = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      const { uri } = result;
      const fileObj = { uri, name: "a.jpg", type: "text/plain" };
      const file = new ReactNativeFile(fileObj);

      try {
        await mutate({ variables: { file } });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onChangeWeb = async ({
    target: {
      validity,
      files: [file]
    }
  }) => {
    if (validity.valid) {
      try {
        await mutate({ variables: { file } });
      } catch (err) {
        console.log(err);
      }
    } else alert("Sorry, unable to upload profile picture");
  };

  return (
    <View>
      {loading ? (
        <FetchingIndicator fetching />
      ) : (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          {Platform.OS === "web" ? (
            <input type="file" required onChange={onChangeWeb} />
          ) : (
            <Button color={buttonColor} title="Camera roll" onPress={onChange} />
          )}
        </View>
      )}
    </View>
  );
};

export default CameraRoll;
