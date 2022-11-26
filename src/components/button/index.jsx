import React from 'react'
import style from "./Button.module.scss";
const ButtonStyle = ({btntitle , action , icon}) => {
  return (
    <button className={`${style.slide}`} onClick={action} >{btntitle}
    {icon && icon}
    </button>
  )
}

export default ButtonStyle