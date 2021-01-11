import { appActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  fetching: true,
  errors: null,
  tokenSentToEmail: false,
  shouldShowResetPasswordForm: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_PASSWORD_TOKEN_START:
      return { ...state, fetching: true };
    case actionTypes.RESET_PASSWORD_TOKEN_SUCCESS:
      return { ...state, fetching: false, errors: null, tokenSentToEmail: true };
    case actionTypes.RESET_PASSWORD_TOKEN_FAIL:
      return { ...state, fetching: false, errors: action.payload, tokenSentToEmail: false };
    case actionTypes.RETRY_TOKEN:
      return { ...state, errors: null, tokenSentToEmail: false };
    case actionTypes.SHOW_RESET_PASSWORD_FORM:
      return { ...state, shouldShowResetPasswordForm: true };
    default:
      return state;
  }
};

export default appReducer;
