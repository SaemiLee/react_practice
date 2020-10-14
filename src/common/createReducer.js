import produce from "immer";

export default function createReducer(initialState, map) {
  return function reducer(state = initialState, action) {
    return produce(state, (draft) => {
      const fn = map[action.type];
      if (fn) {
        // (state, action) => (state.users = action.payload.users)
        fn(draft, action);
      }
    });
  };
}