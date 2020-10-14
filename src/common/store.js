import { createStore, combineReducers } from "redux";
import userReducer from "../board/state";

const reducer = combineReducers({
  user: userReducer,
  // login: loginReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export default store;
