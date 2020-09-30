import React, { useEffect, useState } from "react";
import produce from "immer";
import Player from "../Player";

import "./SquareLayout.css";
import store from "../../state/store";
import { setData } from "../../state/action";

// /**
//  *
//  * @param {object} param
//  * @param {array} param.users
//  */
export default function SquareLayout() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   setUsers(initUsers);
  // }, [initUsers]);

  // useEffect(() => {

  // }, [users]);

  // /**
  //  *
  //  * @param {string} id
  //  * @param {number} score
  //  */
  // const updatePlayer = (id, score) => {
  //   // users[id] = score;
  //   const idx = users.findIndex((e) => e.id === id);
  //   console.log("id:", idx);
  //   setUsers(
  //     produce(users, (newUsers) => {
  //       newUsers[idx].score = score;
  //     })
  //   );
  //   // setUsers([...users]); // TODO: immer to be changed - git connection
  //   // TODO: sort
  // };
  // console.log("parent:", users);
  // const sortedUsers = users.slice().sort((a, b) => {
  //   console.log(a.score, b.score);
  //   return b.score - a.score;
  // });
  // console.log(sortedUsers);
  console.log(store.getState());
  const unsubscribe = store.subscribe(setData);
  return (
    <div className="board-container">
      {[].map((user) => (
        // <Player key={user.id} name={user.name} score={user.score} />
        <Player key={user.id} {...user} />
      ))}
    </div>
  );
}
