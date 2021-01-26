import axios from "axios";
import { currentUserActionTypes as actionTypes } from "../actionTypes";
import { fetchCommunityPredictions } from "./communityPredictions";
import { fetchUserStats } from "./currentUserStats";
import { ENDPOINT_URL } from "../../constants";

export const setUser = user => ({ type: actionTypes.SET_USER, payload: user });
export const setRank = rank => ({
  type: actionTypes.SET_RANK,
  payload: rank
});
export const setNewPredictions = newPredictions => ({
  type: actionTypes.SET_NEW_PREDICTIONS,
  payload: newPredictions
});
export const addNewPrediction = newPrediction => ({
  type: actionTypes.ADD_NEW_PREDICTION,
  payload: newPrediction
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
export const setProfilePic = profilePic => ({
  type: actionTypes.SET_PROFILE_PIC,
  payload: profilePic
});
export const fetchUserStart = () => ({ type: actionTypes.FETCH_USER_START });
export const fetchUserSuccess = user => ({ type: actionTypes.FETCH_USER_SUCCESS, payload: user });
export const fetchUserFail = error => ({ type: actionTypes.FETCH_USER_FAIL, payload: error });
export const createUserStart = () => ({ type: actionTypes.CREATE_USER_START });
export const createUserSuccess = user => ({ type: actionTypes.CREATE_USER_SUCCESS, payload: user });
export const createUserFail = error => ({ type: actionTypes.FETCH_USER_FAIL, payload: error });
export const createUser = (user, successCallback) => async dispatch => {
  try {
    dispatch(createUserStart());

    const response = await axios.post(`${ENDPOINT_URL}/user/dummy_user@fm.com`, user);

    if (response.status === 201) {
      dispatch(createUserSuccess(response.data));
      successCallback();
    } else dispatch(createUserFail(response.data));
  } catch (error) {
    dispatch(createUserFail({ system: error.message }));
  }
};
export const getUser = (_email, successCallback) => async dispatch => {
  try {
    dispatch(fetchUserStart());

    const response = await axios.get(`${ENDPOINT_URL}/user/${_email.toLowerCase()}`);

    if (response.status === 200) {
      dispatch(fetchUserSuccess(response.data));
      dispatch(fetchCommunityPredictions(response.data.id));
      dispatch(fetchUserStats(response.data.id));
      successCallback();
    } else dispatch(fetchUserFail(response.data));
  } catch (error) {
    dispatch(fetchUserFail({ system: error.message }));
  }
};
