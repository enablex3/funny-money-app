import axios from "axios";
import { newsActionTypes as actionTypes } from "../actionTypes";
import { ENDPOINT_URL } from "../../constants";

export const fetchNewsStart = () => ({ type: actionTypes.FETCH_NEWS_START });
export const fetchNewsSuccess = news => ({ type: actionTypes.FETCH_NEWS_SUCCESS, payload: news });
export const fetchNewsFail = error => ({ type: actionTypes.FETCH_NEWS_FAIL, payload: error });
export const fetchNews = () => async dispatch => {
  try {
    dispatch(fetchNewsStart());

    const response = await axios.get(`${ENDPOINT_URL}/news`);

    if (response.status === 200) {
      dispatch(fetchNewsSuccess(response.data.articles));
    } else dispatch(fetchNewsFail(response.data));
  } catch (error) {
    dispatch(fetchNewsFail({ system: error.message }));
  }
};
