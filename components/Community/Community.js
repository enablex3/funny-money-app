import React from "react";
import { StyleSheet, View, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { jsonToArray } from "../../utils/jsonToArray";
import PostContent from "./PostContent";
import Header from "../Header/Header";
import { dateFromString } from "../../utils/DateDifference";

const communityStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    height: 80,
    backgroundColor: "black",
    flexDirection: "row"
  },
  headerShadow: {
    justifyContent: "center",
    alignItems: "center"
  },
  hText: {
    color: "azure",
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,
    fontFamily: "Staatliches_400Regular"
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    color: "azure",
    fontSize: 20,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 10,
    fontFamily: "Staatliches_400Regular"
  },
  logo: {
    height: 50,
    width: 50,
    justifyContent: "flex-start",
    marginLeft: 10
  }
});

function Community(props) {
  const { backgroundColor, posts, navigation } = props;

  const postList = jsonToArray(posts);
  const predictions = [];

  postList.forEach(post => {
    Object.keys(post.value.predictions).forEach(prediction => {
      predictions.push({
        profilePic: post.value.profilePic,
        rank: post.value.rank,
        accuracy: post.value.accuracy,
        displayName: post.name,
        name: prediction,
        ...post.value.predictions[prediction]
      });
    });
  });

  const sortedPredictions = [
    ...predictions.sort((pred1, pred2) => dateFromString(pred2.dateMade) - dateFromString(pred1.dateMade))
  ];

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[communityStyles.container, { backgroundColor }]}>
      <Header navigation={navigation} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ marginBottom: 20 }}>
          {sortedPredictions.map((prediction, index) => (
            <PostContent
              key={index.toString()}
              displayName={prediction.displayName}
              profilePic={prediction.profilePic}
              rank={prediction.rank}
              accuracy={prediction.accuracy}
              predictionName={prediction.name}
              predictionTargetDate={prediction.date}
              dateMade={prediction.dateMade}
              price={prediction.price}
              comment={prediction.comment}
              comments={prediction.comments}
              type={prediction.type}
            />
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = state => {
  const { primaryTextColor, backgroundColor } = state.theme;
  const { posts } = state.community;
  return { primaryTextColor, backgroundColor, posts };
};

export default connect(mapStateToProps)(Community);
