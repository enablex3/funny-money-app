import { newsActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  articles: [],
  fetching: false,
  errors: {}
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS_START:
      return { ...state, fetching: true };
    case actionTypes.FETCH_NEWS_SUCCESS:
      return { ...state, fetching: false, articles: action.payload, errors: {} };
    case actionTypes.FETCH_NEWS_FAIL:
      return { ...state, fetching: false, errors: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
