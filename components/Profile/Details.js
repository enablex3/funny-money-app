import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import UserPie from "./UserPie";

const noviceEmblem = require("../../assets/emblems/noviceTransparent.png");
const beginnerEmblem = require("../../assets/emblems/beginnerTransparent.png");
const experiencedEmblem = require("../../assets/emblems/experiencedTransparent.png");
const skilledEmblem = require("../../assets/emblems/skilledTransparent.png");
const specialistEmblem = require("../../assets/emblems/specialistTransparent.png");
const expertEmblem = require("../../assets/emblems/expertTransparent.png");

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    leftContainer: {
        alignItems: "center",
        marginTop: 20
    },
    rightContainer: {
        borderBottomWidth: 2,
        borderBottomColor: "#9C2C98",
        marginBottom: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "azure",
        fontSize: 25,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        fontFamily: "Staatliches_400Regular",
        textAlign: "center"
    }
});

function Details(props) {
    const { rank, accuracy, primaryTextColor, backgroundColor } = props;

    let emblemLabel;
    let emblem;

    const determineEmblem = () => {
        if ( rank <= 15 ) {
            emblemLabel = "Novice";
            emblem = noviceEmblem;
        } else if ( rank > 15 && rank < 31 ) {
            emblemLabel = "Beginner";
            emblem = beginnerEmblem;
        } else if ( rank >= 31 && rank < 51 ) {
            emblemLabel = "Experienced";
            emblem = experiencedEmblem;
        } else if ( rank >= 51 && rank < 71 ) {
            emblemLabel = "Skilled";
            emblem = skilledEmblem;
        } else if ( rank >= 71 && rank < 91 ) {
            emblemLabel = "Specialist";
            emblem = specialistEmblem;
        } else if ( rank >= 91 ) {
            emblemLabel = "Expert";
            emblem = expertEmblem;
        }
    };

    determineEmblem();

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={emblem} style={{ width: 200, height: 200, marginRight: 5 }}/>
                <Text style={[styles.text, {color: primaryTextColor}]}>{emblemLabel}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={[styles.text, {color: primaryTextColor}]}>Accuracy: {accuracy * 100}%</Text>
                <UserPie />
            </View>
        </View>
    );
    
};

const mapStateToProps = state => {
    const { rank, accuracy } = state.currentUser;
    const { primaryTextColor, backgroundColor } = state.theme;
    return { rank, accuracy, primaryTextColor, backgroundColor };
};

export default connect(mapStateToProps)(Details);