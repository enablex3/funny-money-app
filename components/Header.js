import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import ProfilePicture from "./ProfilePicture";

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    backgroundColor: "black",
    display: "flex",
    borderWidth: 1,
    borderBottomColor: "#9c2c98",
    marginTop: 30
  },
  rank: {
    fontFamily: "Staatliches_400Regular",
    color: "#9c2c98",
    fontSize: 15
  },
  accuracy: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 15
  }
});

function Header(props) {
  const { displayName, rank, currency, accuracy } = props;

  return (
    <View style={styles.header}>
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text style={styles.rank}>
          Rank:
          {rank}
        </Text>
        <Text style={styles.accuracy}>
          Accuracy:
          {`${accuracy * 100}%, Currency: ${currency}`}
        </Text>
      </View>
      <ProfilePicture />
    </View>
  );
}

const mapStateToProps = state => {
  const { displayName, rank, currency, accuracy } = state.currentUser;

  return { displayName, rank, currency, accuracy };
};

export default connect(mapStateToProps)(Header);
