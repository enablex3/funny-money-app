import { themeActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  primaryTextColor: "azure",
  backgroundColor: "black",
  purpleTheme: "#9C2C98",
  agreeTheme: "#00ff40"
};

const themeReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.SET_DARK_MODE: {
      const { primaryTextColor, backgroundColor, purpleTheme, agreeTheme } = action.payload;
      return { ...state, primaryTextColor, backgroundColor, purpleTheme, agreeTheme };
    }
    case actionTypes.SET_LIGHT_MODE: {
      const { primaryTextColor, backgroundColor, purpleTheme, agreeTheme } = action.payload;
      return { ...state, primaryTextColor, backgroundColor, purpleTheme, agreeTheme };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
