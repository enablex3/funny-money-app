import { predictionActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  nameOrSymbol: "",
  date: new Date()
};

const predictionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME_OR_SYMBOL:
      return { ...state, nameOrSymbol: action.payload };
    case actionTypes.SET_DATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

export default predictionReducer;
