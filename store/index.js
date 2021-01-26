import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers";
import currentUserReducer from "./reducers/currentUser";
import newsReducer from "./reducers/news";
import predictionReducer from "./reducers/prediction";
import themeReducer from "./reducers/theme";
import communityReducer from "./reducers/communityPredictions";
import userStatsReducer from "./reducers/currentUserStats";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(
  combineReducers({
    app: appReducer,
    currentUser: currentUserReducer,
    news: newsReducer,
    prediction: predictionReducer,
    theme: themeReducer,
    community: communityReducer,
    currentUserStats: userStatsReducer
  }),
  bindMiddleware([thunkMiddleware])
);

export default store;
