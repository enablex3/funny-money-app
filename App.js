import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useFonts, Staatliches_400Regular } from "@expo-google-fonts/staatliches";
import LoadScreen from "./components/LoadScreen";
import GetStarted from "./components/GetStarted";
import Login from "./components/Login";
import Home from "./components/Home";
import store from "./store";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Staatliches_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoadScreen" component={LoadScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Get Started" component={GetStarted} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
