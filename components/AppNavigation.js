import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function AppNavigation( props ) {

    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#9c2c98',
                inactiveTintColor: 'gray'
            }}>
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );

}