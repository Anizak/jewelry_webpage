import React, { useContext } from "react";
import style from "./CategoryItem.module.css";
import { ProductContext } from "../contexts/ProductContext";

const CategoryItem = ({ item }) => {
  const { state, dispatch } = useContext(ProductContext);
  const getCategory = () =>{
      dispatch({
        type : "selectCategory",
        payload : item
      })
  }

  return (
    <button onClick={getCategory} className={style.box}  style={{border : item.id === state.selectedCategory.id ? "2px solid rgba(147, 147, 147, 1)" : "none"}}>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
    </button>
  );
};

export default CategoryItem;
