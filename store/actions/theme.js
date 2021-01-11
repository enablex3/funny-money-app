import { themeActionTypes as actionTypes } from "../actionTypes";

const darkTheme = {
    primaryTextColor: "azure",
    backgroundColor: "black"
};

const lightTheme = {
    primaryTextColor: "black",
    backgroundColor: "azure"
};

export const setDarkMode = () => ({
    type: actionTypes.SET_DARK_MODE,
    payload: darkTheme
});

export const setLightMode = () => ({
    type: actionTypes.SET_LIGHT_MODE,
    payload: lightTheme
});