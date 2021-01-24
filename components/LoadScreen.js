import React from 'react';
import { StyleSheet, Image, Text, ImageBackground } from 'react-native';

const logo = require('../assets/fmFullTransparent.png');
const appBackgroundImage = require("../assets/appBackground.jpg");

export default function LoadScreen( props ) {

  return (
      <ImageBackground source={appBackgroundImage} style={loadStyles.imgBack}>
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
      </ImageBackground>
  );
}

const loadStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imgBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
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