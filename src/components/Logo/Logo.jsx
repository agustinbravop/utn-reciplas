import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo({ area }) {
  return (
    <h2 className="logo-empresa">
      <Link to={`/${area}` || "/"}>RECIPLAS</Link>
    </h2>
  );
}

export default Logo;
