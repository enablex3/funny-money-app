import React from "react";
import { connect } from "react-redux"; 
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfilePicture from "react-native-profile-picture";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      height: 200,
      marginTop: 10,
      marginBottom: 10
    },
    topSection: {
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        display: "flex",
        marginTop: 10,
        borderBottomColor: "#9c2c98",
        borderBottomWidth: 1
    },
    name: {
        fontFamily: "Staatliches_400Regular",
        color: "azure",
        fontSize: 20,
        justifyContent: "flex-end"
    },
    predictionName: {
        color: "azure",
        fontSize: 20,
        justifyContent: "flex-end"
    },
    predictionPrice: {
        color: "azure",
        fontSize: 15,
        justifyContent: "flex-end",
        fontWeight: "bold"
    },
    midSection: {
        backgroundColor: "black",
        display: "flex",
        marginTop: 10
    },
    dateMade: {
        color: "gray",
        fontSize: 10,
    },
    comment: {
        color: "azure",
        fontSize: 15,
    }
  });

  function PostContent(props) {

    const { 
        displayName, 
        profilePic, 
        primaryTextColor, 
        backgroundColor,
        predictionName,
        predictionTargetDate,
        dateMade,
        price,
        comment, 
        type } = props;

    const profilePicEl =
    profilePic === "none" ? (
      <MaterialCommunityIcons name="account-circle" color="grey" size={50} />
    ) : (
      <ProfilePicture isPicture URLPicture={profilePic} shape="rounded" />
    );

    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <View style={[styles.topSection, {backgroundColor: backgroundColor}]}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    {profilePicEl}
                    <Text style={[styles.name, {color: primaryTextColor}]}>{displayName}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={[styles.predictionName, {color: primaryTextColor}]}>{predictionName}</Text>
                    <Text style={[styles.predictionPrice, {color: primaryTextColor}]}>{price}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={[styles.predictionName, {color: primaryTextColor}]}>Target Date</Text>
                    <Text style={[styles.predictionPrice, {color: primaryTextColor}]}>{predictionTargetDate}</Text>
                </View>
            </View>
            <View style={[styles.midSection, {backgroundColor: backgroundColor}]}>
                <Text style={styles.dateMade}>Posted on: {dateMade}</Text>
                <Text style={[styles.comment, { color: primaryTextColor}]}>{ (comment === undefined ) ? "No comment." : comment}</Text>
            </View>
        </View>
    )

  };

  const mapStateToProps = state => {
    const { primaryTextColor, backgroundColor } = state.theme;
    return { primaryTextColor, backgroundColor };
  };
  

  export default connect(mapStateToProps)(PostContent);