import React from 'react'
import style from "./Product.module.css"
import Category from '../category/Category'
import SubcategoryField from '../subcategoryField/SubcategoryField'
import ProductList from '../productList/ProductList'


const Product = () => {
  return (
    <div className={style.main}>
      <Category toAdd={true} isCallback={false}/>
      <SubcategoryField toAdd={true}/>
      <ProductList/>
    </div>
  )
}

export default Product