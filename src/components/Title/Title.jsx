import React from "react";
import "./Title.css";

function Title({ kind, children }) {
  if (kind === "subtitle") {
    return <h2 className="subtitulo">{children}</h2>; 
  }
  return <h1 className="titulo">{children}</h1>;
}

export default Title;
