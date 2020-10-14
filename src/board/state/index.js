import createReducer from "../../common/createReducer";

const INITIAL_STATE = {
  users: [],
};

const INCREASE = "users/increase";
const DECREASE = "users/decrease";
const SETUSERS = "users/setUsers";

export const increase = (id, score) => ({
  type: INCREASE,
  payload: {
    id,
    score,
  },
});

export const decrease = (id, score) => ({
  type: DECREASE,
  payload: {
    id,
    score,
  },
});

export const setUsers = (users) => {
  console.log("action:", users);
  return {
    type: SETUSERS,
    payload: {
      users,
    },
  };
};

export default createReducer(INITIAL_STATE, {
  [SETUSERS]: (state, action) => (state.users = action.payload.users),
  [INCREASE]: (state, action) => {
    const idx = state.users.findIndex((e) => e.id === action.payload.id);
    state.users[idx].score = action.payload.score + 1;
  },
  [DECREASE]: (state, action) => {
    const idx = state.users.findIndex((e) => e.id === action.payload.id);
    state.users[idx].score = action.payload.score - 1;
  },
});

// export default function reducer(state = INITIAL_STATE, action) {
//   return produce(state, (draft) => {
//     let idx;
//     switch (action.type) {
//       case "setData":
//         draft.users = action.payload.users;
//         break;
//       case "increase":
//         idx = draft.users.findIndex((e) => e.id === action.payload.id);
//         draft.users[idx].score = action.payload.score + 1;
//         break;
//       case "decrease":
//         idx = draft.users.findIndex((e) => e.id === action.payload.id);
//         draft.users[idx].score = action.payload.score - 1;
//         break;
//       default:
//         break;
//     }
//   });
// }
