import React from "react";
import { useMutation, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { StyleSheet, Image, Text, ImageBackground, View } from "react-native";
import FetchingIndicator from "./FetchingIndicator";
import { setUser } from "../store/actions/currentUser";
import { setParentNavigation } from "../store/actions/index";

const logo = require("../assets/fmFullTransparent.png");
const appBackgroundImage = require("../assets/appBackground.jpg");

const loadStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imgBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 300
  },
  fetchingText: {
    fontFamily: "Staatliches_400Regular",
    fontSize: 30,
    color: "azure"
  },
  gs: {
    fontFamily: "Staatliches_400Regular",
    fontSize: 20,
    color: "azure",
    textAlign: "center"
  },
  login: {
    color: "#9c2c98",
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Staatliches_400Regular"
  }
});

const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      id
      email
      displayName
      fullName
      rank
      accuracy
      currency
      profilePicture
      rate
      token
    }
  }
`;

const refresh = async (data, mutation) => {
  const token = await AsyncStorage.getItem("token");

  if (!data && token) {
    try {
      return await mutation();
    } catch (err) {
      return err;
    }
  }

  return false;
};

const setCurrentUserAndToken = async (userData, setCurrentUser, navigation) => {
  await AsyncStorage.setItem("token", userData.token);
  setCurrentUser(userData);
  navigation.navigate("AppNavigation");
};

function LoadScreen({ setCurrentUser, navigation, setParentNav }) {
  setParentNav(navigation);

  const [refreshToken, { data, loading }] = useMutation(REFRESH_TOKEN);

  refresh(data, refreshToken);
  if (data) setCurrentUserAndToken(data.refreshToken, setCurrentUser, navigation);

  return (
    <ImageBackground source={appBackgroundImage} style={loadStyles.imgBack}>
      {loading ? (
        <View>
          <Text style={loadStyles.fetchingText}>Signing In...</Text>
          <FetchingIndicator fetching />
        </View>
      ) : (
        <View>
          <Image source={logo} style={loadStyles.logo} />
          <Text style={loadStyles.gs} onPress={() => navigation.navigate("Get Started")}>
            GET STARTED
          </Text>
          <Text style={{ color: "azure", fontFamily: "Staatliches_400Regular", marginTop: 10, textAlign: "center" }}>
            Or
          </Text>
          <Text style={loadStyles.login} onPress={() => navigation.navigate("Login")}>
            Login
          </Text>
        </View>
      )}
    </ImageBackground>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user)),
  setParentNav: nav => dispatch(setParentNavigation(nav))
});

export default connect(null, mapDispatchToProps)(LoadScreen);
