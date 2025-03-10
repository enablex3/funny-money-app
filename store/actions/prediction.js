import axios from "axios";
import { addNewPrediction } from "./currentUser";
import { predictionActionTypes as actionTypes } from "../actionTypes";
import { WIREMOCK_URL } from "../../constants";

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
export const setSelectedYear = year => ({
  type: actionTypes.SET_SELECTED_YEAR,
  payload: year
});
export const setSelectedMonth = month => ({
  type: actionTypes.SET_SELECTED_MONTH,
  payload: month
});
export const setVisibility = visibility => ({ type: actionTypes.SET_VISIBILITY, payload: visibility });
export const createPredictionStart = () => ({ type: actionTypes.CREATE_PREDICTION_START });
export const createPredictionSuccess = prediction => ({
  type: actionTypes.CREATE_PREDICTION_SUCCESS,
  payload: prediction
});
export const createPredictionFail = error => ({ type: actionTypes.CREATE_PREDICTION_FAIL, payload: error });

export const createPrediction = (prediction, successCallback) => async dispatch => {
  try {
    dispatch(createPredictionStart());

    const stringDate = typeof prediction.date === "string" ? prediction.date : prediction.date.toString();
    const response = await axios.post(`${WIREMOCK_URL}/user/prediction`, { ...prediction, date: stringDate });

    if (response.status === 201) {
      const { price, type, nameOrSymbol, date } = response.data;
      const newPrediction = { [nameOrSymbol]: { price, date, type } };
      dispatch(addNewPrediction(newPrediction));
      dispatch(createPredictionSuccess(response.data));
      successCallback();
    } else dispatch(createPredictionFail(response.data));
  } catch (error) {
    dispatch(createPredictionFail({ system: error.message }));
  }
};
