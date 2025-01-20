import React from 'react'
import style from "./Product.module.css"
import Category from '../category/Category'
import SubcategoryField from '../subcategoryField/SubcategoryField'


const Product = () => {
  return (
    <div className={style.main}>
      <Category/>
      <SubcategoryField/>
    </div>
  )
}

export default Product