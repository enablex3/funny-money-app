import React, { useState } from "react";
import { connect } from "react-redux"; 
import { StyleSheet, Text, View, Alert, TouchableOpacity, Modal } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfilePicture from "react-native-profile-picture";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      height: 220,
      marginTop: 10,
      marginBottom: 20
    },
    topSection: {
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        display: "flex",
        marginTop: 10
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
        height: 100,
        backgroundColor: "black",
        display: "flex",
        marginTop: 10
    },
    bottomSection: {
        height: 40,
        flexDirection: "row",
        justifyContent: "space-around",
        display: "flex",
        borderBottomColor: "#A9A9A9",
        borderBottomWidth: 1
    },
    bottomIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    bottomIconLabel: {
        color: "azure",
        fontFamily: "Staatliches_400Regular", 
        fontSize: 12, 
        marginTop: 8
    },
    dateMade: {
        color: "gray",
        fontSize: 10,
    },
    comment: {
        color: "azure",
        fontSize: 15,
    },
    modalView: {
        margin: 20,
        backgroundColor: "black",
        borderRadius: 20,
        padding: 35,
        alignItems: "stretch",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "space-evenly",
        marginTop: 22
      },
    closeModal: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
  });

  function PostContent(props) {

    const { 
        displayName, 
        profilePic, 
        primaryTextColor, 
        backgroundColor,
        purpleTheme,
        predictionName,
        predictionTargetDate,
        dateMade,
        price,
        comment, 
        type } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const [headOutlineClicked, setHeadOutlineClicked] = useState(false);
    const [cancelClicked, setCancelClicked] = useState(false);

    const profilePicEl =
    profilePic === "none" ? (
      <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons name="account-circle" color="grey" size={50} />
      </TouchableOpacity>
      
    ) : (
        <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(true)}>
            <ProfilePicture isPicture URLPicture={profilePic} shape="rounded" />
        </TouchableOpacity>
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
                <Text style={styles.dateMade}>Posted on {dateMade}</Text>
                <Text style={[styles.comment, { color: primaryTextColor}]}>{ (comment === undefined ) ? "No comment." : comment}</Text>
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.bottomIconContainer}>
                    <TouchableOpacity style={{flexDirection: "row"}} onPress={() => setHeadOutlineClicked(!headOutlineClicked)}>
                        <MaterialCommunityIcons name="head-check-outline" size={20} color={headOutlineClicked ? purpleTheme : primaryTextColor} />
                        <Text style={[styles.bottomIconLabel, {color: headOutlineClicked ? purpleTheme : primaryTextColor}]}>Agree</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomIconContainer}>
                    <TouchableOpacity style={{flexDirection: "row"}} onPress={() => setCancelClicked(!cancelClicked)}>
                        <MaterialCommunityIcons name="cancel" size={20} color={cancelClicked ? "red" : primaryTextColor} />
                        <Text style={[styles.bottomIconLabel, { color: cancelClicked ? "red" : primaryTextColor}]}>Disagree</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomIconContainer}>
                    <TouchableOpacity style={{flexDirection: "row"}}>
                        <MaterialCommunityIcons name="comment-processing" size={20} color={primaryTextColor} />
                        <Text style={[styles.bottomIconLabel, {color: primaryTextColor}]}>Comment</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {backgroundColor: backgroundColor}]}>
                        <TouchableOpacity activeOpacity={1} style={styles.closeModal} onPress={() => setModalVisible(!modalVisible)}>
                                    <MaterialCommunityIcons name="close" size={30} color="red"/>
                        </TouchableOpacity>
                        <View style={[styles.topSection, {backgroundColor: backgroundColor}]}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                {profilePicEl}
                                <Text style={[styles.name, {color: primaryTextColor}]}>{displayName}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>  
        </View>
    )

  };

  const mapStateToProps = state => {
    const { primaryTextColor, backgroundColor, purpleTheme } = state.theme;
    return { primaryTextColor, backgroundColor, purpleTheme };
  };
  

  export default connect(mapStateToProps)(PostContent);