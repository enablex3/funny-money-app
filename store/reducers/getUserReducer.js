import * as currentUserActions from "../actions/currentUser";

export const getUser = (email) => async (dispatch, getState) =>  {
    await fetch(`http://localhost:8080/api/user/${email}`)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function(data){
      const userData = data;
      // dispatch currentUserReducer functions
      dispatch(currentUserActions.setDisplayName(userData.displayName));
      dispatch(currentUserActions.setID(userData.id));
      dispatch(currentUserActions.setRank(userData.rank));
      dispatch(currentUserActions.setNewPredictions(userData.newPredictions));
      dispatch(currentUserActions.setCurrency(userData.currency));
      dispatch(currentUserActions.setAccuracy(userData.accuracy));
      dispatch(currentUserActions.setPastPredictions(userData.pastPredictions));
    })
    .catch(function(error) {
      console.log('Looks like there was a problem: \n', error);
    });
};
