import React from "react";
import style from "./CategoryModal.module.css";

const CategoryModal = () => {
  return (
    <div className={style.box}>
      <button className={style.plusBtn}>
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.55">
            <path
              d="M7.88672 0.99707V12.9971"
              stroke="#1F1617"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.88672 6.99707H13.8867"
              stroke="#1F1617"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default CategoryModal;
