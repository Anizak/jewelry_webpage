import React, { useState } from "react";
import style from "./ProductModal.module.css";
import CustomProductModal from "./CustomProductModal";

const ProductModal = () => {
  const [open, setOpen] = useState(true);

  const closeModal = (param) => {
    setOpen(param);
  };
  return (
    <div className={style.box}>
      <button onClick={() => setOpen(true)} className={style.plusBtn}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.55">
            <path
              d="M7.88672 0.99707V12.9971"
              stroke="#1F1617"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.88672 6.99707H13.8867"
              stroke="#1F1617"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
      {open && <CustomProductModal isSub={false} onOpen={closeModal} />}
    </div>
  );
};

export default ProductModal;
