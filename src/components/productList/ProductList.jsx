import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import ProductItem from "../items/subcategory/productItem/ProductItem";
import { ProductContext } from "../contexts/ProductContext";
import ProductModal from "../modals/productModal/ProductModal";

const ProductList = () => {
  const { state } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      state.products.filter((item) => item.categoryId === state.selectedCategory.id && item.subcategoryId === state.selectedSubcategory.id)
    );
  }, [state.selectedCategory, state.selectedSubcategory]);
  return (
    <div className={styles.container}>
      <ProductModal/>
      {filteredProducts.map((item) => (
        <ProductItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ProductList;
