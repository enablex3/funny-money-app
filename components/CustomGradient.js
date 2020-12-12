import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions } from 'react-native';

export default function CustomGradient() {
    return(
        <LinearGradient
            colors={['#9c2c98', 'black']}
            height={Dimensions.get('window').height}
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}
            style={{flex: 1, position: 'relative'}} />
    );
};