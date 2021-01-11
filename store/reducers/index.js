import { appActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  fetching: true,
  errors: null,
  tokenSentToEmail: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_PASSWORD_TOKEN_START:
      return { ...state, fetching: true };
    case actionTypes.RESET_PASSWORD_TOKEN_SUCCESS:
      return { ...state, fetching: false, errors: null, tokenSentToEmail: true };
    case actionTypes.RESET_PASSWORD_TOKEN_FAIL:
      return { ...state, fetching: false, errors: action.payload, tokenSentToEmail: false };
    default:
      return state;
  }
};

export default appReducer;
