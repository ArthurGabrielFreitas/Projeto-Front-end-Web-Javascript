import React from 'react';
import style from './Box.module.css'

function Box(props) {
  return (
    <div className={style.box}>
        <p>{props.texto}</p>
    </div>
  )
};

export default Box;