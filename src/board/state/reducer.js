import produce from "immer";

const INITIAL_STATE = {
  users: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    let idx;
    switch (action.type) {
      case "setData":
        draft.users = action.payload.users;
        break;
      case "increase":
        idx = draft.users.findIndex((e) => e.id === action.payload.id);
        draft.users[idx].score = action.payload.score + 1;
        break;
      case "decrease":
        idx = draft.users.findIndex((e) => e.id === action.payload.id);
        draft.users[idx].score = action.payload.score - 1;
        break;
      default:
        break;
    }
  });
}
