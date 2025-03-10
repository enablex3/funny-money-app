import axios from "axios";
import { appActionTypes as actionTypes } from "../actionTypes";
import { ENDPOINT_URL } from "../../constants";

export const resetPasswordStart = () => ({ type: actionTypes.RESET_PASSWORD_START });
export const resetPasswordSuccess = () => ({ type: actionTypes.RESET_PASSWORD_SUCCESS });
export const resetPasswordFail = errors => ({ type: actionTypes.RESET_PASSWORD_FAIL, payload: errors });
export const resetPasswordTokenStart = () => ({ type: actionTypes.RESET_PASSWORD_TOKEN_START });
export const resetPasswordTokenSuccess = () => ({ type: actionTypes.RESET_PASSWORD_TOKEN_SUCCESS });
export const resetPasswordTokenFail = errors => ({ type: actionTypes.RESET_PASSWORD_TOKEN_FAIL, payload: errors });
export const retryToken = () => ({ type: actionTypes.RETRY_TOKEN });
export const showResetPasswordForm = () => ({ type: actionTypes.SHOW_RESET_PASSWORD_FORM });
export const changePasswordStart = () => ({ type: actionTypes.CHANGE_PASSWORD_START });
export const changePasswordSuccess = () => ({ type: actionTypes.CHANGE_PASSWORD_SUCCESS });
export const changePasswordFail = errors => ({ type: actionTypes.CHANGE_PASSWORD_FAIL, payload: errors });
export const setParentNavigation = navigation => ({ type: actionTypes.SET_PARENT_NAVIGATION, payload: navigation });

export const resetPasswordToken = email => async dispatch => {
  try {
    dispatch(resetPasswordTokenStart());

    const response = await axios.post(`${ENDPOINT_URL}/resetpassword`, { email });

    if (response.status === 201) {
      dispatch(resetPasswordTokenSuccess());
    } else dispatch(resetPasswordTokenFail(response.data));
  } catch (error) {
    dispatch(resetPasswordTokenFail({ system: error.message }));
  }
};

export const changePassword = passwordData => async dispatch => {
  try {
    dispatch(changePasswordStart());

    const response = await axios.post(`${ENDPOINT_URL}/changepassword`, passwordData);

    if (response.status === 201) {
      dispatch(changePasswordSuccess());
    } else dispatch(changePasswordFail(response.data));
  } catch (error) {
    dispatch(changePasswordFail({ system: error.message }));
  }
};
