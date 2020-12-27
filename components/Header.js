import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: "black",
    flexDirection: "row",
    borderWidth: 1,
    borderBottomColor: "#9c2c98"
  },
  name: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 30,
    justifyContent: "flex-start"
  },
  rank: {
    fontFamily: "Staatliches_400Regular",
    color: "#9c2c98",
    fontSize: 20,
    justifyContent: "flex-end"
  },
  accuracy: {
    fontFamily: "Staatliches_400Regular",
    color: "azure",
    fontSize: 15,
    justifyContent: "flex-end"
  }
});

function Header(props) {
  const { displayName, rank, currency, accuracy } = props;

  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.rank}>
          Rank:
          {rank}
        </Text>
        <Text style={styles.accuracy}>
          Accuracy:
          {`${accuracy * 100}%, Currency: ${currency}`}
        </Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  const { displayName, rank, currency, accuracy } = state.currentUser;

  return { displayName, rank, currency, accuracy };
};

export default connect(mapStateToProps)(Header);
