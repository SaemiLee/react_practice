import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import boardReducer from "../board/state";
import userReducer from '../user/state';

// const myMiddleware = store => next => action => {
//   console.log(`prev state : ${JSON.stringify(store.getState())}`);
//   const result = next(action);
//   console.log(`next state : ${JSON.stringify(store.getState())}`);
//   return result;
// }

const reducer = combineReducers({
  board: boardReducer,
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;


