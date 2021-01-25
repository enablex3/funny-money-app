import { userStatActionTypes as actionTypes } from "../actionTypes";

const initialState = {
    portfolio: "",
    averages: ""
};

const userStatsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_USER_STATS: {
            const { stats } = action.payload;
            return { ...state, portfolio: stats.portfolio, averages: stats.averages };
        }
        default: {
            return state;
        }
    }
};

export default userStatsReducer;