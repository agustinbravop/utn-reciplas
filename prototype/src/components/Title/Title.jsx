import React from "react";
import "./Title.css";

function Title({ variant, children }) {
  if (variant === "subtitle") {
    return <h2 className="subtitulo">{children}</h2>;
  }
  return <h1 className="titulo">{children}</h1>;
}

export default Title;
