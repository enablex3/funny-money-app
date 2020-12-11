import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const logo = require('../assets/fmFull.png');

export default function LoadScreen( { navigation } ) {

  return (
    <View style={ loadStyles.container }>
      <Image 
        source={ logo }
        style={ loadStyles.logo }
      />
      <Text style={ loadStyles.gs } onPress={() => navigation.navigate('Get Started')}>
        GET STARTED
      </Text>
    </View> 
  );
}

const loadStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black'
  },
  logo: {
    width: 300,
    height: 300
  },
  gs: {
    fontFamily: 'Staatliches_400Regular',
    fontSize: 20,
    color: 'azure'
  }
});