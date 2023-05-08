import React from "react";

/*
 'links' es un arreglo de la forma {
  "Materias Primas": "/materias",
  "Productos Producidos": "/productos"
 };
*/
function NavBar({ links }) {
  const navItems = links?.map((link) => {
    return (
      <li>
        <a href={link[1]}>{link[0]}</a>
      </li>
    );
  });

  return (
    <nav>
      <ul>{navItems}</ul>
    </nav>
  );
}

export default NavBar;
