import { currentUserActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  fullName: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  rank: null,
  currency: '',
  newPredictions: {},
  pastPredictions: {},
  accuracy: null
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
    case actionTypes.SET_ID:
      return { ...state, id: action.payload };
    case actionTypes.SET_RANK:
      return { ...state, rank: action.payload };
    case actionTypes.SET_NEW_PREDICTIONS:
      return { ...state, newPredictions: action.payload };
    case actionTypes.SET_CURRENCY:
      return { ...state, currency: action.payload };
    case actionTypes.SET_ACCURACY:
      return { ...state, accuracy: action.payload };
    case actionTypes.SET_PAST_PREDICTIONS:
      return { ...state, pastPredictions: action.payload };
    default:
      return state;
  }
};

export default currentUserReducer;
