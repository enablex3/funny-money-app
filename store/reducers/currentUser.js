import { currentUserActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  id: null,
  email: "",
  displayName: "",
  rank: null,
  currency: "",
  newPredictions: {},
  pastPredictions: {},
  accuracy: null,
  errors: {}
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_START:
      return { ...state, fetching: true };
    case actionTypes.FETCH_USER_SUCCESS: {
      const { id, email, displayName, rank, currency, newPredictions, pastPredictions, accuracy } = action.payload;
      return {
        ...state,
        id,
        email,
        displayName,
        rank,
        currency,
        newPredictions,
        pastPredictions,
        accuracy,
        fetching: false,
        errors: {}
      };
    }
    case actionTypes.FETCH_USER_FAIL: {
      const errors = action.payload;
      return { ...state, fetching: false, errors };
    }
    default:
      return state;
  }
};

export default currentUserReducer;
