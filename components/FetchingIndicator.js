import React from "react";
import { ActivityIndicator } from "react-native";

export default function FetchingIndicator({ fetching }) {
  return fetching ? <ActivityIndicator size="large" color="#9C2C98" /> : null;
}
