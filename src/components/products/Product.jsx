import React, { useContext } from 'react'
import style from "./Product.module.css"
import Category from '../category/Category'
import SubcategoryField from '../subcategoryField/SubcategoryField'
import ProductList from '../productList/ProductList'
import {useEffect} from "react";
import { ProductContext } from '../contexts/ProductContext'


const Product = () => {
  const {state} = useContext(ProductContext);
  useEffect(()=>{
    localStorage.setItem("category", JSON.stringify(state.categories))
  }, [state.categories])
  return (
    <div className={style.main}>
      <Category toAdd={true} isCallback={false} />
      <SubcategoryField toAdd={true} isCallback={false}/>
      <ProductList/>
    </div>
  )
}

export default Product