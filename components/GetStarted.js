import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button} from 'react-native';

const icon = require('../assets/fmIcon.jpg');

export default function GetStarted(  props  ) {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={ gsStyles.container }>
            <View style={ gsStyles.header }>
                <Image 
                    source={ icon }
                    style={ gsStyles.logo }
                />
            </View>
            <Text style={ gsStyles.gsText }>
                Create a free account to get started.
            </Text>
            <Text style={ gsStyles.gsText2 }>
                FunnyMoney does not share your private information with anyone.
            </Text>
            <View style={ gsStyles.gsForm }>
                <TextInput 
                    placeholder='Full Name:'
                    placeholderTextColor='#555'
                    style={ gsStyles.textInput }
                />
                <TextInput
                    placeholder='Email Address:'
                    placeholderTextColor='#555'
                    style={ gsStyles.textInput }
                />
                <TextInput
                    placeholder='Password:'
                    placeholderTextColor='#555'
                    secureTextEntry={true}
                    style={ gsStyles.textInput }
                />
                <TextInput
                  placeholder='Confirm Password:'
                  placeholderTextColor='#555'
                  secureTextEntry={true}
                  style={ gsStyles.textInput }
                />
                <Text style={ gsStyles.gsButton }>
                    Get Started
                </Text>
            </View>
            <Text style={ gsStyles.gsText }>
                Already have an account?
            </Text>
            <Text style={ gsStyles.gsLoginLink } onPress={() => props.navigation.navigate('Login')}>
                Login
            </Text>
        </View>
    );
}

const gsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    gsText: {
        color: 'azure', 
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20,
        fontFamily: 'Staatliches_400Regular'
    },
    gsText2: {
        color: 'azure', 
        textAlign: 'center',
        marginTop: 10,
        fontSize: 10,
        fontWeight: '200',
    },
    gsLoginLink: {
        color: '#9c2c98', 
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Staatliches_400Regular'
    },
    gsButton: {
        color: 'black',
        backgroundColor: '#9c2c98',
        textAlign: 'center',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        fontSize: 25,
        fontFamily: 'Staatliches_400Regular'
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        color: 'azure',
        fontSize: 20,
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 10,
        fontFamily: 'Staatliches_400Regular'
    },
    gsForm: {
        marginTop: 30,
        marginLeft: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#9c2c98'
    },
    logo: {
        height: 100,
        width: 100,
    }
});