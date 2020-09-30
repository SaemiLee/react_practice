export const increase = (id, score) => ({
  type: "increase",
  payload: {
    id,
    score,
  },
});

export const decrease = (id, score) => ({
  type: "decrease",
  payload: {
    id,
    score,
  },
});

export const setData = (users) => {
  console.log("action:", users);
  return {
    type: "setData",
    payload: {
      users,
    },
  };
};
