import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setDarkMode, setLightMode } from "../../../store/actions/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 100,
        flex: 1,
        flexDirection: "row",
    },
    columnDark: {
        flex:1,
        flexDirection: "column",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    columnLight: {
        flex:1,
        flexDirection: "column",
        backgroundColor: "azure",
        justifyContent: "center",
        alignItems: "center"
    },
    textDark: {
        color: "azure"
    },
    textLight: {
        color: "black"
    },
    icon: {
        textAlign: "center"
    }
});

function AppThemeModal(props) {

    const { primaryTextColor, backgroundColor } = props;

    console.log(primaryTextColor, backgroundColor);

    return (
        <View style={styles.container}>
            <View style={styles.columnDark}>
                <TouchableOpacity onPress={() => setDarkMode()}>
                    <MaterialCommunityIcons name={"brightness-3"} color="azure" size={50} style={styles.icon} />
                    <Text style={styles.textDark}>Dark Theme</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.columnLight}>
                <TouchableOpacity onPress={() => setLightMode()}>
                    <MaterialCommunityIcons name={"brightness-5"} color="black" size={50} style={styles.icon} />
                    <Text style={styles.textLight}>Light Theme</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    const { primaryTextColor, backgroundColor } = state.theme;
    return { primaryTextColor, backgroundColor };
};

const mapDispatchToProps = dispatch => ({
    setDarkMode: () => dispatch(setDarkMode()),
    setLightMode:() => dispatch(setLightMode())
  });

export default connect(mapStateToProps, mapDispatchToProps)(AppThemeModal);