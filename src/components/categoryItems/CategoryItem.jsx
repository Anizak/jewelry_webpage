import React, { useContext, useEffect } from "react";
import style from "./CategoryItem.module.css";
import { ProductContext } from "../contexts/ProductContext";

const CategoryItem = ({ item, isCallback, checkCategory, selected }) => {
  const { state, dispatch } = useContext(ProductContext);
  const getCategory = () => {
    dispatch({
      type: "selectCategory",
      payload: item,
    });
  };

  return (
    <button
      onClick={isCallback ? () => checkCategory(item) : getCategory}
      className={style.box}
      style={{
        border:
          isCallback && item.id === selected?.id
            ? "2px solid rgba(147, 147, 147, 1)"
            : !isCallback && item.id === state.selectedCategory.id
            ? "2px solid rgba(147, 147, 147, 1)"
            : "none",
      }}
    >
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
    </button>
  );
};

export default CategoryItem;
