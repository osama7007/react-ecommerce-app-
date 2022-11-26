import React from 'react'
import style from "./HeadLine.module.scss";
const HeadLine = ({title}) => {
  return (
    <h2 className={`${style.underLine}`} >{title}</h2>
  )
}

export default HeadLine