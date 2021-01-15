import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { jsonToArray } from "../../utils/jsonToArray";
import PostContent from "./PostContent";
import Header from "../Header/Header";

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
  const { primaryTextColor, backgroundColor, posts } = props;

  const postObject = jsonToArray(posts);

  let predictionsObject;
  let profilePic;
  let accuracy;
  let rank;

  return (
    <View style={[communityStyles.container, {backgroundColor: backgroundColor}]}>
      <Header navigation={props.navigation} />
        <ScrollView contentContainerStyle={{ marginBottom: 20}}>
          {postObject.map((user, idx) => {
            predictionsObject = jsonToArray(user.value.predictions);
            profilePic = user.value.profilePic;
            rank = user.value.rank;
            accuracy = user.value.accuracy;
            return (
              predictionsObject.map((item, idx) => {
                return (
                  <PostContent 
                    key={idx} 
                    displayName={user.name} 
                    profilePic={profilePic}
                    rank={rank}
                    accuracy={accuracy}
                    predictionName={item.name}
                    predictionTargetDate={item.value.date}
                    dateMade={item.value.dateMade}
                    price={item.value.price}
                    comment={item.value.comment}
                    type={item.value.type}
                  />
                );
              })
            );
          })}
        </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  const { primaryTextColor, backgroundColor } = state.theme;
  const { posts } = state.community;
  return { primaryTextColor, backgroundColor, posts };
};

export default connect(mapStateToProps)(Community);
