import axios from "axios";
import { communityPostActionTypes as actionTypes } from "../actionTypes";
import { ENDPOINT_URL } from "../../constants";

export const fetchCommunityPredictions = (id) => ({
    type: actionTypes.FETCH_USER_POSTS,
    payload: id
});

export const createUserPost = (prediction) => ({
    type: actionTypes.CREATE_USER_POST,
    payload: prediction
});