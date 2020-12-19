import React from "react";
import { ActivityIndicator } from "react-native";

export default function FetchingIndicator(props) {
  const { fetching } = props;
  return fetching ? <ActivityIndicator size="large" /> : null;
}
