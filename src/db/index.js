const users = ["Emma", "Noah", "James", "William", "Olivia"];

function getUserData() {
  return users.map((user) => {
    const id = Math.floor(Math.random() * Date.now()).toString(36);
    return {
      id,
      name: user,
      score: 0,
    };
  });
}

export const userData = getUserData();
