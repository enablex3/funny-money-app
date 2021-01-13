import axios from "axios";
import { communityPostActionTypes as actionTypes } from "../actionTypes";
import { ENDPOINT_URL } from "../../constants";

export const fetchCommunityPredictions = (id) => async dispatch => {
    try {
        const response = await axios.get(`${ENDPOINT_URL}/user/community/${id}`);
        if ( response.status === 200) {
            dispatch(setCommunityPosts(response.data));
        } else {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
};

export const setCommunityPosts = (posts) => ({
    type: actionTypes.SET_USER_POSTS,
    payload: posts
});

export const createUserPost = (prediction) => ({
    type: actionTypes.CREATE_USER_POST,
    payload: prediction
});