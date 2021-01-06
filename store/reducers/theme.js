import { themeActionTypes as actionTypes } from "../actionTypes";

const initialState = {
    primaryTextColor: "azure",
    backgroundColor: "black"
};

const themeReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.SET_DARK_MODE: { 
            const { primaryTextColor, backgroundColor } = action.payload;
            return { ...state, primaryTextColor, backgroundColor };
        }
        case actionTypes.SET_LIGHT_MODE: {
            const { primaryTextColor, backgroundColor } = action.payload;
            return { ...state, primaryTextColor, backgroundColor };
        }
        default:
            return state;
    }
};

export default themeReducer;

