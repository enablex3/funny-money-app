import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers";
import currentUserReducer from "./reducers/currentUser";
import newsReducer from "./reducers/news";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(
  combineReducers({ app: appReducer, currentUser: currentUserReducer, news: newsReducer }),
  bindMiddleware([thunkMiddleware])
);

export default store;
