import React, { useState } from "react";
import { connect } from "react-redux"; 
import { StyleSheet, Text, View, TouchableOpacity, Platform, ScrollView } from "react-native";
import { jsonToArray } from "../../utils/jsonToArray";

const styles = StyleSheet.create({
    commentText: {
        color: "azure",
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10
    },
    commentUser: {
        color: "azure",
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: "Staatliches_400Regular"
    },
    commentDate: {
        color: "gray",
        fontSize: 10,
        marginLeft: 20,
        marginRight: 20
    },
    commentsContainer: {
        flex: 1,
        marginTop: 10
    },
    commentTextContainer: {
        borderColor: "azure",
        borderRadius: 10,
        backgroundColor: "black",
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    }
});

function Comments(props) {
    let platform;
    let commentSectionMargin;

    if (Platform.OS === "ios" || Platform.OS === "android") {
        platform = "mobile";
        commentSectionMargin = 20;
    } else {
        platform = "web";
        commentSectionMargin = 300;
    }

    const { comments, primaryTextColor, backgroundColor } = props;
    const commentsObj = jsonToArray(comments);

    return (
        <ScrollView>
            {commentsObj.map((comment, idx) => {
                return (
                    <View key={idx.toString()} style={styles.commentsContainer}>
                        <Text style={[styles.commentUser, {
                                marginLeft: commentSectionMargin, 
                                marginRight: commentSectionMargin,
                                color: primaryTextColor}
                            ]}>
                            {comment.value.displayName}
                        </Text>
                        <Text style={[styles.commentDate, {
                                marginLeft: commentSectionMargin, 
                                marginRight: commentSectionMargin}
                                ]}>
                            Commented on {comment.value.dateMade}
                        </Text>
                        <View style={[styles.commentTextContainer, 
                            { 
                                marginLeft: commentSectionMargin, 
                                marginRight: commentSectionMargin,
                                borderColor: primaryTextColor,
                                backgroundColor: (backgroundColor === "black") ? "#383838" : "#D0D0D0"}
                            ]}>
                            <Text style={[styles.commentText, {color: primaryTextColor}]}>
                                {comment.value.text}
                            </Text>
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const mapStateToProps = state => {
    const { primaryTextColor, backgroundColor } = state.theme;
    return { primaryTextColor, backgroundColor };
};

export default connect(mapStateToProps)(Comments);