import React from "react";
import style from "./TituloSecao.module.css";

function TituloSecao({subtitulo = "", descricao = ""}) {

  function txtToUpperCase(txt) {
    return txt.toUpperCase();
  }

  return (
    <div className={style.tituloSecao}>
      <h2 className={style.titulo}>{txtToUpperCase(subtitulo)}</h2>
      <p className={style.descricao}>{descricao}</p>
    </div>
  );
}

export default TituloSecao;
