import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button} from 'react-native';

const icon = require('../assets/fmIcon.jpg');

export default function Home( props ) {

    const email = props.route.params.email;

    return(
        <View style={ homeStyles.container }>
            <View style={ homeStyles.header }>
                <View style={{ flex: 1 }}>
                <Image 
                    source={ icon }
                    style={ homeStyles.logo }
                />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={ homeStyles.name }>
                        {email}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9c2c98',
    },
    header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    hText: {
        color: 'azure', 
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20,
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
    logo: {
        height: 50,
        width: 50,
        justifyContent: 'flex-start'
    },
    name: {
        fontFamily: 'Staatliches_400Regular',
        color: 'azure',
        fontSize: 30,
        justifyContent: 'flex-end'
    }
});