import React from 'react'
import style from "./Product.module.css"
import Category from '../category/Category'
import SubcategoryField from '../subcategoryField/SubcategoryField'
import ProductList from '../productList/ProductList'


const Product = () => {
  return (
    <div className={style.main}>
      <Category/>
      <SubcategoryField/>
      <ProductList/>
    </div>
  )
}

export default Product