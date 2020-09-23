import React, { useEffect, useState } from "react";
import Player from "../Player";

import "./SquareLayout.css";

/**
 *
 * @param {object} param
 * @param {array} param.users
 */
export default function SquareLayout({ users: initUsers }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(initUsers);
  }, [initUsers]);
  const updatePlayer = (id, score) => {
    console.log(id, score);
    users[id] = score;
    setUsers([...users]); // TODO: immer to be changed
    // TODO: sort
  };
  return (
    <div className="board-container">
      {users.map((user) => (
        // <Player key={user.id} name={user.name} score={user.score} />
        <Player key={user.id} {...user} updatePlayer={updatePlayer} />
      ))}
    </div>
  );
}
