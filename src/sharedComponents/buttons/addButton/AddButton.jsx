import React from 'react'
import style from "./AddButton.module.css"

const AddButton = ({children, onClick, disabled, ...props}) => {
  return (
    <button onClick={onClick} disabled = {disabled} {...props} className={style.btn}>{children}</button>
  )
}

export default AddButton