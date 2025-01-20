import React, { useContext } from "react";
import styles from "./SubcategoryItem.module.css";
import { ProductContext } from "../../contexts/ProductContext";

const SubcategoryItem = ({ data }) => {
  const { state, dispatch } = useContext(ProductContext);

  const selectSubcategory = () => {
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
          backgroundColor:
            data.id === state.selectedSubcategory.id ? "blue" : "white",
          borderRadius: data.id === state.selectedSubcategory.id ? "25px" : "0",
        }}
      ></div>
    </button>
  );
};

export default SubcategoryItem;
