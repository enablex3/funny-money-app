import React, { useState } from "react";
import { connect } from "react-redux"; 
import { StyleSheet, Text, View, TouchableOpacity, Platform, TextInput } from "react-native";
import { Modal as MobileModal } from "react-native";
import Modal from "modal-enhanced-react-native-web";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Comments from "./Comments";
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
        fontSize: 15,
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
        borderBottomColor: "#383838",
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
        shadowOpacity: 0.75,
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
    },
    rank: {
        fontFamily: "Staatliches_400Regular",
        color: "#9c2c98",
        fontSize: 20
      },
      accuracy: {
        fontFamily: "Staatliches_400Regular",
        color: "azure",
        fontSize: 15
      },
      textInput: {
        color: "azure",
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
      },
      commentSubmitButton: {
        color: "black",
        backgroundColor: "#9c2c98",
        textAlign: "center",
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
        fontSize: 15,
        fontFamily: "Staatliches_400Regular"
      },
  });

  function PostContent(props) {
    let platform;
    let commentSectionMargin;

    if (Platform.OS === "ios" || Platform.OS === "android") {
        platform = "mobile";
        commentSectionMargin = 20;
    } else {
        platform = "web";
        commentSectionMargin = 300;
    }

    const { 
        displayName, 
        profilePic,
        rank,
        accuracy,
        primaryTextColor, 
        backgroundColor,
        purpleTheme,
        agreeTheme,
        predictionName,
        predictionTargetDate,
        dateMade,
        price,
        comment,
        comments,
        type } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const [headOutlineClicked, setHeadOutlineClicked] = useState(false);
    const [cancelClicked, setCancelClicked] = useState(false);
    const [commentClicked, setCommentClicked] = useState(false);

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

    const modalContent = () => {
        return (
            <View style={styles.centeredView}>
                <View style={[styles.modalView, {backgroundColor: backgroundColor, shadowColor: ( primaryTextColor === "azure") ? "#CB6CE6": "#9C2C98"}]}>
                    <TouchableOpacity activeOpacity={1} style={styles.closeModal} onPress={() => setModalVisible(!modalVisible)}>
                                <MaterialCommunityIcons name="close" size={30} color="red"/>
                    </TouchableOpacity>
                    <View style={[styles.topSection, {backgroundColor: backgroundColor, flexDirection: "row", justifyContent: "space-between"}]}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            {profilePicEl}
                            <Text style={[styles.name, {color: primaryTextColor}]}>{displayName}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column", marginTop: 22 }}>
                            <Text style={[styles.rank, {color: ( primaryTextColor === "azure") ? "#CB6CE6": "#9C2C98" }]}>Rank: {rank}</Text>
                            <Text style={[styles.accuracy, {color: primaryTextColor}]}>Accuracy: {accuracy * 100}%</Text>
                        </View>
                    </View>
                </View>
            </View> 
        );
    }

    const appropriateModal = 
    platform === "web" ? (
        <Modal
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(!modalVisible)}
            >{modalContent()}
        </Modal>
    ) : (
        <MobileModal
            animation="slide"
            transparent={true}
            visible={modalVisible}
        >{modalContent()}
        </MobileModal>
    );

    return (
        <View style={[styles.container, {backgroundColor: backgroundColor, 
                            height: commentClicked ? 440 : 220}]}>
            <View style={[styles.topSection, {backgroundColor: backgroundColor}]}>
                <View style={{ flex: 1, flexDirection: "column", marginTop: 8 }}>
                    {profilePicEl}
                    <Text style={[styles.name, {color: primaryTextColor}]}>{displayName}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "column", marginTop: 30, marginLeft: 20 }}>
                    <Text style={[styles.predictionName, {color: primaryTextColor}]}>{predictionName}</Text>
                    <Text style={[styles.predictionPrice, {color: primaryTextColor}]}>{price}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "column", marginTop: 30 }}>
                    <Text style={[styles.predictionName, {color: primaryTextColor}]}>Target Date</Text>
                    <Text style={[styles.predictionPrice, {color: primaryTextColor}]}>{predictionTargetDate}</Text>
                </View>
            </View>
            <View style={[styles.midSection, {backgroundColor: backgroundColor}]}>
                <Text style={styles.dateMade}>Posted on {dateMade}</Text>
                <Text style={[styles.comment, { color: primaryTextColor}]}>{ (comment === undefined ) ? "No comment." : comment}</Text>
            </View>
            <View style={[styles.bottomSection, {borderBottomColor: (backgroundColor === "black") ? "#383838" : "#D0D0D0"}]}>
                <TouchableOpacity style={{flexDirection: "row"}} onPress={() => setHeadOutlineClicked(!headOutlineClicked)} disabled={cancelClicked}>
                    <View style={styles.bottomIconContainer}>
                            <MaterialCommunityIcons name="head-check-outline" size={20} color={headOutlineClicked ? agreeTheme : primaryTextColor} />
                            <Text style={[styles.bottomIconLabel, {color: headOutlineClicked ? agreeTheme : primaryTextColor}]}>Agree</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row"}} onPress={() => setCancelClicked(!cancelClicked)} disabled={headOutlineClicked}>
                    <View style={styles.bottomIconContainer}>
                            <MaterialCommunityIcons name="cancel" size={20} color={cancelClicked ? "red" : primaryTextColor} />
                            <Text style={[styles.bottomIconLabel, { color: cancelClicked ? "red" : primaryTextColor}]}>Disagree</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row"}} onPress={() => setCommentClicked(!commentClicked)}>
                    <View style={styles.bottomIconContainer}>
                            <MaterialCommunityIcons name="comment-processing" size={20} color={commentClicked ? (backgroundColor === "black" ? "#CB6CE6" : "#9C2C98" ) : primaryTextColor} />
                            <Text style={[styles.bottomIconLabel, {color: commentClicked ? (backgroundColor === "black" ? "#CB6CE6" : "#9C2C98" ) : primaryTextColor}]}>Comment</Text>
                    </View>
                </TouchableOpacity>
            </View>
            { commentClicked && (comments !== undefined) ? <Comments comments={comments} /> : null }
            { commentClicked ? <TextInput placeholder="What are your thoughts?" placeholderTextColor="#555" style={[styles.textInput, {
                marginLeft: commentSectionMargin,
                marginRight: commentSectionMargin,
                color: primaryTextColor}]} multiline={true} /> : null }
            { commentClicked ? 
                <TouchableOpacity>
                    <Text style={[styles.commentSubmitButton, {
                            marginLeft: commentSectionMargin,
                            marginRight: commentSectionMargin,
                            backgroundColor: purpleTheme}
                        ]}>Post</Text>
                </TouchableOpacity>
                 : null }
            {appropriateModal}
        </View>
    )

  };

const mapStateToProps = state => {
    const { primaryTextColor, backgroundColor, purpleTheme, agreeTheme } = state.theme;
    return { primaryTextColor, backgroundColor, purpleTheme, agreeTheme };
};
  

  export default connect(mapStateToProps)(PostContent);