import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { setDarkMode, setLightMode } from "../../../store/actions/theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 100,
    flex: 1,
    flexDirection: "row"
  },
  columnDark: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  columnLight: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "azure",
    justifyContent: "center",
    alignItems: "center"
  },
  textDark: {
    color: "azure",
    fontFamily: "Staatliches_400Regular"
  },
  textLight: {
    color: "black",
    fontFamily: "Staatliches_400Regular"
  },
  icon: {
    textAlign: "center"
  }
});

function AppThemeModal({ setLight, setDark }) {
  return (
    <View style={styles.container}>
      <View style={styles.columnDark}>
        <TouchableOpacity onPress={setDark}>
          <MaterialCommunityIcons name="brightness-3" color="azure" size={50} style={styles.icon} />
          <Text style={styles.textDark}>Dark Theme</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.columnLight}>
        <TouchableOpacity onPress={setLight}>
          <MaterialCommunityIcons name="brightness-5" color="black" size={50} style={styles.icon} />
          <Text style={styles.textLight}>Light Theme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  const { primaryTextColor, backgroundColor } = state.theme;
  return { primaryTextColor, backgroundColor };
};

const mapDispatchToProps = dispatch => ({
  setDark: () => dispatch(setDarkMode()),
  setLight: () => dispatch(setLightMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppThemeModal);
