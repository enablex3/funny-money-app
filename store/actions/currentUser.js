import { currentUserActionTypes as actionTypes } from "../actionTypes";

export const setFullName = fullName => ({ type: actionTypes.SET_FULL_NAME, payload: fullName });
export const setDisplayName = displayName => ({ type: actionTypes.SET_DISPLAY_NAME, payload: displayName });
export const setEmail = email => ({ type: actionTypes.SET_EMAIL, payload: email });
export const setPassword = password => ({ type: actionTypes.SET_PASSWORD, payload: password });
export const setConfirmPassword = confirmPassword => ({
  type: actionTypes.SET_CONFIRM_PASSWORD,
  payload: confirmPassword
});
