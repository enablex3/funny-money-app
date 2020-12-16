import axios from "axios";
import { currentUserActionTypes as actionTypes } from "../actionTypes";
import { ENDPOINT_URL } from "../../constants";

export const setFullName = fullName => ({ type: actionTypes.SET_FULL_NAME, payload: fullName });
export const setDisplayName = displayName => ({ type: actionTypes.SET_DISPLAY_NAME, payload: displayName });
export const setEmail = email => ({ type: actionTypes.SET_EMAIL, payload: email });
export const setPassword = password => ({ type: actionTypes.SET_PASSWORD, payload: password });
export const setConfirmPassword = confirmPassword => ({
  type: actionTypes.SET_CONFIRM_PASSWORD,
  payload: confirmPassword
});
export const fetchUserStart = () => ({ type: actionTypes.FETCH_USER_START });
export const fetchUserSuccess = user => ({ type: actionTypes.FETCH_USER_SUCCESS, payload: user });
export const fetchUserFail = error => ({ type: actionTypes.FETCH_USER_FAIL, payload: error });
export const createUser = user => async dispatch => {
  try {
    dispatch(fetchUserStart());

    const response = await axios.post(`${ENDPOINT_URL}/users`, user);

    if (response.data.user) dispatch(fetchUserSuccess(response.data.user));
    else dispatch(fetchUserFail(response.data.error));
  } catch (error) {
    dispatch(fetchUserFail({ system: error.message }));
  }
};
