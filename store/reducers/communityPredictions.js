import { communityPostActionTypes as actionTypes } from "../actionTypes";

const initialState = {
    posts: ""
};

const communityReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case actionTypes.SET_USER_POSTS: {
            const { posts } = action.payload;
            return { ...state, posts };
        }
        default: {
            return state;
        }
    }
};

export default communityReducer;