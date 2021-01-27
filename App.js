import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useFonts, Staatliches_400Regular } from "@expo-google-fonts/staatliches";
import LoadScreen from "./components/LoadScreen";
import GetStarted from "./components/GetStarted";
import Login from "./components/Login";
import AppNavigation from "./components/AppNavigation";
import store from "./store";
import { APOLLO_URI } from "./constants";

const Stack = createStackNavigator();

export default function App() {
  const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem("token");

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });
  const uploadLink = createUploadLink({
    uri: APOLLO_URI
  });
  const client = new ApolloClient({
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache()
  });

  const [fontsLoaded] = useFonts({
    Staatliches_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  StatusBar.setHidden(true, "none");

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="LoadScreen" component={LoadScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Get Started" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="AppNavigation" component={AppNavigation} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
