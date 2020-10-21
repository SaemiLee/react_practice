import React from "react";
import style from "./Button.module.css";

/**
 * @param {object} param
 * @param {string} param.title
 * @param {boolean} param.big
 * @param {(e) => {}} param.clickHandler
 */
export default function Button({ title, big, clickHandler }) {
  return (
    <button
      className={style.button}
      style={{ fontSize: `${big} ? '2rem' : '1rem'` }}
      onClick={clickHandler}
    >
      {title}
    </button>
    
  );
}
