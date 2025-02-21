import React, { useContext } from "react";
import styles from "./SubcategoryItem.module.css";
import { ProductContext } from "../../contexts/ProductContext";

const SubcategoryItem = ({ data, isCallback, callback, selected }) => {
  const { state, dispatch } = useContext(ProductContext);


  const selectSubcategory = () => {
    isCallback ? callback(data) :
      dispatch({
          type: "selectedSubcategory",
          payload: data
      })
  }
  return (
    <button onClick={selectSubcategory} className={styles.subBtn}>
      <span>{data.title}</span>
      <div
        className={styles.line}
        style={{
          backgroundColor: isCallback && data.id === selected.id ?  "blue" : 
           !isCallback &&  data.id === state.selectedSubcategory.id ? "blue" : "white",
          borderRadius: isCallback && data.id === selected.id ? "25px" : !isCallback && data.id === state.selectedSubcategory.id ? "25px" : "0",
        }}
      ></div>
    </button>
  );
};

export default SubcategoryItem;
