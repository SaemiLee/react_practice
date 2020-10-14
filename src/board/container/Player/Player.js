// @ts-nocheck
import React from "react";
import Button from "../../component/Button";
import style from "./Player.module.css";
// import store from "../../../common/store";
import { decrease, increase } from "../../state";
import { useDispatch } from "react-redux";

/**
 *
 * @param {object} param
 * @param {string} param.id
 * @param {string} param.name,
 * @param {number} param.score
 */
export default function Player({ id, name, score }) {
  // const [score, setScore] = useState(initial);

  const dispatch = useDispatch();
  const increaseHandler = () => {
    console.log("increase:", id, score + 1);
    // setScore(score + 1);
    // updatePlayer(id, score + 1);
    dispatch(increase(id, score));
  };

  const decreaseHandler = () => {
    console.log("decrease:", id, score - 1);
    if (score > 0) {
      // setScore(score - 1);
      //updatePlayer(id, score - 1);
      dispatch(decrease(id, score));
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
