import { currentUserActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  id: null,
  displayName: "",
  fullName: "",
  rank: null,
  currency: "",
  profilePic: "none",
  newPredictions: {},
  pastPredictions: {},
  accuracy: null,
  errors: {},
  loggedIn: false,
  fetching: false
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_START:
      return { ...state, fetching: true };
    case actionTypes.FETCH_USER_SUCCESS: {
      const {
        id,
        displayName,
        fullName,
        rank,
        currency,
        profilePic,
        newPredictions,
        pastPredictions,
        accuracy
      } = action.payload;
      return {
        ...state,
        id,
        displayName,
        fullName,
        rank,
        currency,
        profilePic,
        newPredictions,
        pastPredictions,
        accuracy,
        fetching: false,
        loggedIn: true,
        errors: {}
      };
    }
    case actionTypes.FETCH_USER_FAIL: {
      const errors = action.payload;
      return { ...state, fetching: false, errors };
    }
    case actionTypes.CREATE_USER_START:
      return { ...state, fetching: true };
    case actionTypes.CREATE_USER_SUCCESS: {
      const {
        id,
        displayName,
        fullName,
        rank,
        currency,
        profilePic,
        newPredictions,
        pastPredictions,
        accuracy
      } = action.payload;
      return {
        ...state,
        id,
        displayName,
        fullName,
        rank,
        currency,
        profilePic,
        newPredictions,
        pastPredictions,
        accuracy,
        fetching: false,
        loggedIn: true,
        errors: {}
      };
    }
    case actionTypes.CREATE_USER_FAIL: {
      const errors = action.payload;
      return { ...state, fetching: false, errors };
    }
    case actionTypes.SET_RANK:
      return { ...state, rank: action.payload };
    case actionTypes.SET_NEW_PREDICTIONS:
      return { ...state, newPredictions: action.payload };
    case actionTypes.ADD_NEW_PREDICTION:
      return { ...state, newPredictions: { ...state.newPredictions, ...action.payload } };
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
