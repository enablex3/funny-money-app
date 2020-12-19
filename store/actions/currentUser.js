import { currentUserActionTypes as actionTypes } from "../actionTypes";

export const setFullName = fullName => ({ type: actionTypes.SET_FULL_NAME, payload: fullName });
export const setDisplayName = displayName => ({ type: actionTypes.SET_DISPLAY_NAME, payload: displayName });
export const setEmail = email => ({ type: actionTypes.SET_EMAIL, payload: email });
export const setPassword = password => ({ type: actionTypes.SET_PASSWORD, payload: password });
export const setConfirmPassword = confirmPassword => ({
  type: actionTypes.SET_CONFIRM_PASSWORD,
  payload: confirmPassword
});
export const setID = id => ({
  type: actionTypes.SET_ID,
  payload: id
});
export const setRank = rank => ({
  type: actionTypes.SET_RANK,
  payload: rank
});
export const setNewPredictions = newPredictions => ({
  type: actionTypes.SET_NEW_PREDICTIONS,
  payload: newPredictions
});
export const setCurrency = currency => ({
  type: actionTypes.SET_CURRENCY,
  payload: currency
});
export const setAccuracy = accuracy => ({
  type: actionTypes.SET_ACCURACY,
  payload: accuracy
});
export const setPastPredictions = pastPredictions => ({
  type: actionTypes.SET_PAST_PREDICTIONS,
  payload: pastPredictions
});
