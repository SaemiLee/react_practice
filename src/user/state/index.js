import axios from 'axios';
import createReducer from "../../common/createReducer";

const INITIAL_STATE = {
  isLoading: false,
  login: null,
};

const SUCCESS = "user/success";
const FAILURE = "users/failure";
const LOADING = "users/loading";

export const success = () => ({
  type: SUCCESS,
})

export const failure = () => ({
  type: FAILURE,
})

export const loading = () => ({
  type: LOADING,
})

export const login = () => dispatch => {
  dispatch(loading());
  // axios.get('http://localhost:5000/login').then(dispatch(success())).catch(dispatch(failure()))
  setTimeout(() => {
    dispatch(success())
  }, 5000)
}
  

export default createReducer(INITIAL_STATE, {
  [SUCCESS]: (state, action) => {
    state.isLoading = false;
    state.login = true;
  },
  [FAILURE]: (state, action) => {
    state.isLoading = false;
    state.login = false;
  },
  [LOADING]: (state, action) => {
    state.isLoading = true;
    state.login = null;
  }
});
