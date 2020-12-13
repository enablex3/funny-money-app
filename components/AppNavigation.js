import React from "react";
// import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import Community from "./Community";

const Tab = createBottomTabNavigator();

/*
const tabNavigatorStyles = StyleSheet.create({
  navigator: {
    borderWidth: 1,
    borderColor: "#9c2c98"
  }
});
*/

export default function AppNavigation() {
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#9c2c98",
          inactiveTintColor: "gray",
          style: { borderTopColor: "#9c2c98", borderWidth: 1, backgroundColor: "black" }
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
          }}>
          {() => <Home />}
        </Tab.Screen>
        <Tab.Screen
          name="Community"
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-group" color={color} size={size} />
          }}>
          {() => <Community />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
