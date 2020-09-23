// @ts-nocheck
import React, { useState } from "react";
import Button from "../Button";
import style from "./Player.module.css";

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
    console.log("increase");
    setScore(score + 1);
    updatePlayer(id, score + 1);
  };

  const decreaseHandler = () => {
    console.log("decrease");
    if (score > 0) {
      setScore(score - 1);
      updatePlayer(id, score - 1);
    }
  };
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
