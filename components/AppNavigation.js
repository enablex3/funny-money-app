import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home/Home";
import Community from "./Community/Community";
import Predict from "./Predict/Predict";
import Profile from "./Profile/Profile";

const Tab = createBottomTabNavigator();

function AppNavigation(props) {
  const { primaryTextColor, backgroundColor } = props;

  return (
    <NavigationContainer independent>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#9c2c98",
          inactiveTintColor: "gray",
          showLabel: false,
          style: { borderTopColor: "#9c2c98", borderWidth: 1, backgroundColor: backgroundColor }
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
          }}
          component={Home}>
        </Tab.Screen>
        <Tab.Screen
          name="Community"
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-group" color={color} size={size} />
          }}
          component={Community}>
        </Tab.Screen>
        <Tab.Screen
          name="Predict"
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="chart-line" color={color} size={size} />
          }}
          component={Predict}>
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-settings" color={color} size={size} />
          }}
          component={Profile}>
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  const { primaryTextColor, backgroundColor } = state.theme;
  return { primaryTextColor, backgroundColor };
};

export default connect(mapStateToProps)(AppNavigation);