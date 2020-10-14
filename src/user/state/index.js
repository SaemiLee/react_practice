import createReducer from "../../common/createReducer";

const INITIAL_STATE = {
  login: true,
};

export default createReducer(INITIAL_STATE, {
  setLoggin: (state, action) => (state.login = !state.login),
});
