import { currentUserActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  id: null,
  fullName: "",
  displayName: "",
  fetching: false,
  error: {}
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FULL_NAME:
      return { ...state, fullName: action.payload };
    case actionTypes.SET_DISPLAY_NAME:
      return { ...state, displayName: action.payload };
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case actionTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case actionTypes.SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    case actionTypes.FETCH_USER_START:
      return { ...state, fetching: true };
    case actionTypes.FETCH_USER_SUCCESS: {
      const { fullName, displayName, id } = action.payload;
      return { ...state, fetching: false, error: [], fullName, displayName, id };
    }
    case actionTypes.FETCH_USER_FAIL: {
      const error = action.payload;
      return { ...state, fetching: false, error };
    }
    default:
      return state;
  }
};

export default currentUserReducer;
