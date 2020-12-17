import axios from "axios";
import { currentUserActionTypes as actionTypes } from "../actionTypes";
import { ENDPOINT_URL } from "../../constants";

export const fetchUserStart = () => ({ type: actionTypes.FETCH_USER_START });
export const fetchUserSuccess = user => ({ type: actionTypes.FETCH_USER_SUCCESS, payload: user });
export const fetchUserFail = error => ({ type: actionTypes.FETCH_USER_FAIL, payload: error });
export const createUser = (user, successCallback) => async dispatch => {
  try {
    dispatch(fetchUserStart());

    const response = await axios.post(`${ENDPOINT_URL}/user/dummy_user@fm.com`, user);

    // a good response will have a user property
    // a bad response will have an errors property
    if (response.status === 201) {
      dispatch(fetchUserSuccess(response.data));
      successCallback();
    } else dispatch(fetchUserFail(response.data));
  } catch (error) {
    dispatch(fetchUserFail({ system: error.message }));
  }
};
export const getUser = (_email, successCallback) => async dispatch => {
  try {
    dispatch(fetchUserStart());

    const response = await axios.get(`${ENDPOINT_URL}/user/dummy_user@fm.com`);

    if (response.status === 200) {
      dispatch(fetchUserSuccess(response.data));
      successCallback();
    } else dispatch(fetchUserFail(response.data));
  } catch (error) {
    dispatch(fetchUserFail({ system: error.message }));
  }
};
