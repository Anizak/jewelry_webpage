import React, { useContext, useEffect, useState } from "react";
import style from "./SubcategoryField.module.css";
import { categories } from "../../services/category.service";
import SubcategoryModal from "../modals/subcategoryModal/SubcategoryModal";
import SubcategoryItem from "../items/subcategory/SubcategoryItem";
import { ProductContext } from "../contexts/ProductContext";

const SubcategoryField = ({toAdd, isCallback, callback, data}) => {
  const [subcategory, setSubcategory] = useState([]);  
  const {state} = useContext(ProductContext);
  const [selectedSubcategory, setSelectedsubcategory] = useState({});

  useEffect(()=>{
    if (data){
      setSubcategory(data);
      setSelectedsubcategory(data[0]);
      callback(data[0]);
    }
  }, [data])

  const getSubcategory = (subcategory) =>{
    callback(subcategory);
    setSelectedsubcategory(subcategory);
  }

  
  return (
    <div className={style.main}>
      {
      isCallback ? subcategory.map((item) => {
        return (
         <SubcategoryItem isCallback={true} callback={getSubcategory} key={item.id} data= {item} selected={selectedSubcategory}/>
        );
      }) :
      state.selectedCategory.subcategory.map((item) => {
        return (
         <SubcategoryItem isCallback={false} key={item.id} data= {item}/>
        );
      })}
      {toAdd && <SubcategoryModal />}
    </div>
  );
};

export default SubcategoryField;
