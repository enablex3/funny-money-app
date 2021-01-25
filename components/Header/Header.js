import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { connect } from "react-redux";
import ProfilePic from "../Profile/ProfilePic";

const noviceEmblem = require("../../assets/emblems/noviceTransparent.png");
const beginnerEmblem = require("../../assets/emblems/beginnerTransparent.png");
const experiencedEmblem = require("../../assets/emblems/experiencedTransparent.png");
const skilledEmblem = require("../../assets/emblems/skilledTransparent.png");
const specialistEmblem = require("../../assets/emblems/specialistTransparent.png");
const expertEmblem = require("../../assets/emblems/expertTransparent.png");

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
    fontSize: 15,
  },
  emblemName: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 20
  }
});

function Header(props) {
  const { rank, currency, accuracy, primaryTextColor, backgroundColor, navigation } = props;

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
    <View style={[styles.header, { backgroundColor }]}>
      <View style={{ marginTop: 10, justifyContent: "flex-end" }}>
        <Text style={[styles.rank, {color: ( primaryTextColor === "azure") ? "#CB6CE6": "#9C2C98" }]}>
          Rank:
          {rank}
        </Text>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around"}}>
          <Image source={emblem} style={{ width: 30, height: 30, marginRight: 5}}/>
          <Text style={[styles.emblemName, {color: primaryTextColor }]}>
            {emblemLabel}
          </Text>
        </View>
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
