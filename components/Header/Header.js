import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import ProfilePic from "../Profile/ProfilePic";

let styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "#9c2c98",
    marginTop: 30
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
  }
});

function Header(props) {
  const { rank, currency, accuracy, primaryTextColor, backgroundColor, navigation } = props;

  return (
    <View style={[styles.header, { backgroundColor }]}>
      <View style={{ marginTop: 10, justifyContent: "flex-end" }}>
        <Text style={styles.rank}>
          Rank:
          {rank}
        </Text>
        <Text style={[styles.accuracy, { color: primaryTextColor }]}>
          Accuracy:
          {`${accuracy * 100}%, Currency: ${currency}`}
        </Text>
      </View>
      <ProfilePic navigation={navigation} />
    </View>
  );
}

const mapStateToProps = state => {
  const { rank, currency, accuracy } = state.currentUser;
  const { primaryTextColor, backgroundColor } = state.theme;
  return { rank, currency, accuracy, primaryTextColor, backgroundColor };
};

export default connect(mapStateToProps)(Header);
