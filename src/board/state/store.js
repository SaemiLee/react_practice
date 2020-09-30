import { createStore, combineReducers } from "redux";
import userReducer from "./reducer";

const reducer = combineReducers({
  users: userReducer,
  //   products: productReducer,
});

const store = createStore(reducer);

export default store;
