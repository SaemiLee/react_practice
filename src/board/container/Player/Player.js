// @ts-nocheck
import React, { useState } from "react";
import Button from "../../component/Button";
import style from "./Player.module.css";
import store from "../../state/store";
import { decrease, increase } from "../../state/action";

/**
 *
 * @param {object} param
 * @param {string} param.id
 * @param {string} param.name,
 * @param {number} param.score
 * @param {(id, score) => {}} param.updatePlayer
 */
export default function Player({ id, name, score: initial, updatePlayer }) {
  const [score, setScore] = useState(initial);

  const increaseHandler = () => {
    console.log("increase:", id, score + 1);
    setScore(score + 1);
    // updatePlayer(id, score + 1);
    store.dispatch(increase(id, score));
  };

  const decreaseHandler = () => {
    console.log("decrease:", id, score - 1);
    if (score > 0) {
      setScore(score - 1);
      //updatePlayer(id, score - 1);
      store.dispatch(decrease(id, score));
    }
  };
  console.log("store:", store.getState());
  return (
    <div className={style.item} data-id={id}>
      <div className={style.left}>{name}</div>
      <div className={style.right}>
        {score}
        <div className={style.btn}>
          <Button title="+" clickHandler={increaseHandler} />
        </div>
        <div className={style.btn}>
          <Button title="-" clickHandler={decreaseHandler} />
        </div>
      </div>
    </div>
  );
}
