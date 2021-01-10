import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 100,
        flex: 1,
        flexDirection: "row",
        backgroundColor: "black"
    },
    column: {
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "azure",
        textAlign: "center"
    },
    icon: {
        textAlign: "center"
    }
});

function PhotoUploadModal(props) {

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name={"camera"} color="azure" size={50} style={styles.icon} />
                    <Text style={styles.text}>Use camera</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.column}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name={"camera-image"} color="azure" size={50} style={styles.icon} />
                    <Text style={styles.text}>Select from gallery</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PhotoUploadModal;