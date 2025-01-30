import React from "react";
import styles from "./ProductItem.module.css";

const ProductItem = ({data}) => {
    
  return (
    <div className={styles.container}>
      <img src={data.image} alt="necklace"></img>
      <div className={styles.productInfo}>
        <p>{data.name}</p>
        <span>{data.price}$</span>
      </div>
    </div>
  );
};

export default ProductItem;
