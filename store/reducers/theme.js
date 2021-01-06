import { themeActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  primaryTextColor: "azure",
  backgroundColor: "black"
};

const themeReducer = (state = initialState, action) => {
  const { primaryTextColor, backgroundColor } = action.payload;

  switch (action.type) {
    case actionTypes.SET_DARK_MODE:
      return { ...state, primaryTextColor, backgroundColor };
    case actionTypes.SET_LIGHT_MODE:
      return { ...state, primaryTextColor, backgroundColor };
    default:
      return state;
  }
};

export default themeReducer;
