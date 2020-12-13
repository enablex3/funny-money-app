import { currentUserActionTypes as actionTypes } from "../actionTypes";

const initialState = {
  fullName: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FULL_NAME:
      return { ...state, fullName: action.payload };
    case actionTypes.SET_DISPLAY_NAME:
      return { ...state, displayName: action.payload };
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case actionTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case actionTypes.SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};

export default currentUserReducer;
