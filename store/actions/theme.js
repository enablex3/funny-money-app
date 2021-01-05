import { themeActionTypes as actionTypes } from "../actionTypes";

export const setDarkMode = () => ({
    type: actionTypes.SET_DARK_MODE,
    payload: { primaryTextColor: "azure", backgroundColor: "black" }
});

export const setLightMode = () => ({
    type: actionTypes.SET_LIGHT_MODE,
    payload: { primaryTextColor: "black", backgroundColor: "azure" }
});