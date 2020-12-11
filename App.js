import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useFonts, Staatliches_400Regular } from '@expo-google-fonts/staatliches'
import LoadScreen from './components/LoadScreen';
import GetStarted from './components/GetStarted';

const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'Staatliches_400Regular': require('./assets/fonts/Staatliches-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return(
      <AppLoading 
      />
    );
  }

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LoadScreen"
          component={LoadScreen}
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="Get Started" 
          component={GetStarted}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}