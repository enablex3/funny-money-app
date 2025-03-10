import { predictionActionTypes as actionTypes } from "../actionTypes";
import { dateFromString } from "../../utils/DateDifference";

const initialState = () => {
  const currentDate = new Date();

  return {
    nameOrSymbol: "",
    date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1),
    price: "",
    fetching: false,
    errors: {},
    selectedYear: currentDate.getFullYear(),
    selectedMonth: currentDate.getMonth(),
    visibility: 0
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
    case actionTypes.SET_SELECTED_YEAR:
      return { ...state, selectedYear: action.payload };
    case actionTypes.SET_SELECTED_MONTH:
      return { ...state, selectedMonth: action.payload };
    case actionTypes.SET_VISIBILITY:
      return { ...state, visibility: action.payload };
    case actionTypes.CREATE_PREDICTION_START:
      return { ...state, fetching: true };
    case actionTypes.CREATE_PREDICTION_SUCCESS: {
      const { nameOrSymbol, date, price } = action.payload;
      const jsDate = dateFromString(date);

      return {
        ...state,
        nameOrSymbol,
        date: jsDate,
        price,
        fetching: false,
        errors: {}
      };
    }
    case actionTypes.CREATE_PREDICTION_FAIL: {
      const errors = action.payload;
      return { ...state, fetching: false, errors };
    }
    default:
      return state;
  }
};

export default predictionReducer;
