import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

const areasToNavLinks = {
  prod: {
    "Materias Primas": "/prod/materias",
    Productos: "/prod/productos",
    Pedidos: "/prod/pendientes",
  },
  compras: {
    Compras: "/compras/compras",
    "Materias Primas": "/compras/materias",
    Productos: "/compras/productos",
  },
  ventas: {
    Clientes: "/ventas/clientes",
    Proveedores: "/ventas/proveedores",
    Pedidos: "/ventas/pedidos",
  }, 
  admin: {
    Compras: "/compras/compras",
    "Materias Primas": "/compras/materias",
    Productos: "/compras/productos",
  }
};

// area = 'prod' | 'compras' | 'ventas' | 'admin'
function NavBar({ area }) {
  const location = useLocation();

  if (!area) {
    return null;
  }

  const navItems = Object.entries(areasToNavLinks[area])?.map((link) => {
    return (
      <li className={location.pathname.includes(link[1]) && "current"}>
        <NavLink to={link[1]}>{link[0]}</NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className="nav-bar">{navItems}</ul>
    </nav>
  );
}

export default NavBar;
