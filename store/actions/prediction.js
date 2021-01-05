import { predictionActionTypes as actionTypes } from "../actionTypes";

export const setNameOrSymbol = nameOrSymbol => ({
  type: actionTypes.SET_NAME_OR_SYMBOL,
  payload: nameOrSymbol
});

export const setDate = date => ({
  type: actionTypes.SET_DATE,
  payload: date
});

export const setPrice = price => ({
  type: actionTypes.SET_PRICE,
  payload: price
});
