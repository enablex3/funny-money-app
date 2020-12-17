import { GET_USER  } from "../actions/getUser";
import { setEmail } from "../actions/currentUser";

const initialState = {
    email: '',
    displayName: '',
    rank: null,
    currency: '',
    newPredictions: {},
    pastPredictions: {},
    accuracy: null
};


export const getUser = (email) => async (dispatch, getState) =>  {
    await fetch(`http://localhost:8080/api/user/${email}`)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function(data){
      const userData = data;
      // dispatch currentUserReducer
      dispatch(setEmail(userData.email));
    })
    .catch(function(error) {
      console.log('Looks like there was a problem: \n', error);
    });
};
