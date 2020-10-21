import axios from 'axios';
import createReducer from "../../common/createReducer";

const INITIAL_STATE = {
  login: false,
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
  const userAxios = axios.create({
      baseURL: 'http://localhost:5000/account',
      withCredentials: true
    })
  userAxios.post('/login', { email: 'test@test.com', password: 'test' })
    .then((res) => {
      console.log(res.data.data)
      if (res.data.data.token) {
        localStorage.setItem('token', res.data.data.token);
        setTimeout(() => { dispatch(success()) }, 2000);
      } else {
        dispatch(failure());
      }
    }).catch(dispatch(failure()))
}
  

export default createReducer(INITIAL_STATE, {
  [SUCCESS]: (state, action) => {
    state.login = true;
  },
  [FAILURE]: (state, action) => {
    state.login = false;
  },
  [LOADING]: (state, action) => {
    state.login = null;
  }
});
