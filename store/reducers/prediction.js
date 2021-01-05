import { predictionActionTypes as actionTypes } from "../actionTypes";

const initialState = () => {
  const currentDate = new Date();

  return {
    nameOrSymbol: "",
    date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1),
    price: ""
  };
};

const predictionReducer = (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_NAME_OR_SYMBOL:
      return { ...state, nameOrSymbol: action.payload };
    case actionTypes.SET_DATE:
      return { ...state, date: action.payload };
    case actionTypes.SET_PRICE:
      return { ...state, price: action.payload };
    default:
      return state;
  }
};

export default predictionReducer;
