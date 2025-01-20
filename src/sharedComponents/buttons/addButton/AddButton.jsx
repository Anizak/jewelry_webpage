import React from 'react'
import style from "./AddButton.module.css"

const AddButton = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={style.btn}>{children}</button>
  )
}

export default AddButton