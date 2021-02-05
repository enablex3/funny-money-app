import { Alert } from "react-native";
import * as Facebook from "expo-facebook";
import { APP_NAME, FACEBOOK_APP_ID } from "../constants";

export default async function facebookLogin() {
  try {
    await Facebook.initializeAsync({
      appId: FACEBOOK_APP_ID,
      appName: APP_NAME
    });

    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions
    } = await Facebook.logInWithReadPermissionsAsync({ permissions: ["public_profile"] });

    if (type === "success") console.log({ type, token, expirationDate, permissions, declinedPermissions });
    else console.log({ type, token, expirationDate, permissions, declinedPermissions });
  } catch ({ message }) {
    Alert.alert(`Facebook Login Error: ${message}`);
    console.log(message);
  }
}
