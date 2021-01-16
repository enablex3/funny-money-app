import { themeActionTypes as actionTypes } from "../actionTypes";

const darkTheme = {
    primaryTextColor: "azure",
    backgroundColor: "black",
    purpleTheme: "#9C2C98",
    agreeTheme: "#00ff40"
};

const lightTheme = {
    primaryTextColor: "black",
    backgroundColor: "azure",
    purpleTheme: "#CB6CE6",
    agreeTheme: "#008000"
};

export const setDarkMode = () => ({
    type: actionTypes.SET_DARK_MODE,
    payload: darkTheme
});

export const setLightMode = () => ({
    type: actionTypes.SET_LIGHT_MODE,
    payload: lightTheme
});