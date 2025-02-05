import React, { useContext } from "react";
import style from "./SubcategoryField.module.css";
import { categories } from "../../services/category.service";
import SubcategoryModal from "../modals/subcategoryModal/SubcategoryModal";
import SubcategoryItem from "../items/subcategory/SubcategoryItem";
import { ProductContext } from "../contexts/ProductContext";

const SubcategoryField = ({toAdd}) => {
  const {state} = useContext(ProductContext)
  return (
    <div className={style.main}>
      {state.selectedCategory.subcategory.map((item) => {
        return (
         <SubcategoryItem key={item.id} data= {item}/>
        );
      })}
      {toAdd && <SubcategoryModal />}
    </div>
  );
};

export default SubcategoryField;
