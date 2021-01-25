import axios from "axios";
import { userStatActionTypes as actionTypes } from "../actionTypes";
import { ENDPOINT_URL } from "../../constants";

export const fetchUserStats = (id) => async dispatch => {
    try {
        const response = await axios.get(`${ENDPOINT_URL}/user/stats/${id}`);
        if ( response.status === 200) {
            dispatch(setUserStats(response.data));
        } else {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
};

export const setUserStats = (stats) => ({
    type: actionTypes.SET_USER_STATS,
    payload: stats
});
