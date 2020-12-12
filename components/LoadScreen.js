import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const logo = require('../assets/fmFull.png');

export default function LoadScreen( props ) {

  return (
    <View style={ loadStyles.container }>
      <Image 
        source={ logo }
        style={ loadStyles.logo }
      />
      <Text style={ loadStyles.gs } onPress={() => props.navigation.navigate('Get Started')}>
        GET STARTED
      </Text>
      <Text style={ { color: 'azure', fontFamily: 'Staatliches_400Regular', marginTop: 10 } }>
        Or
      </Text>
      <Text style={ loadStyles.login } onPress={() => props.navigation.navigate('Login')}>
        Login
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
  },
  login: {
    color: '#9c2c98', 
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Staatliches_400Regular'
},
});