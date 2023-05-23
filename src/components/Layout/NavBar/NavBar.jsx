import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

const areasToNavLinks = {
  prod: {
    Pedidos: "/prod/pedidos",
    Productos: "/prod/productos",
    "Materias Primas": "/prod/materias",
  },
  compras: {
    Compras: "/compras/compras",
    Productos: "/compras/productos",
    Proveedores: "/compras/proveedores",
    "Materias Primas": "/compras/materias",
  },
  ventas: {
    Pedidos: "/ventas/pedidos",
    Clientes: "/ventas/clientes",
    Proveedores: "/ventas/proveedores",
    Productos: "/ventas/productos",
    "Materias Primas": "/ventas/materias",
  },
  admin: {
    Compras: "/admin/compras",
    Ventas: "/admin/ventas",
    Clientes: "/admin/clientes",
    Proveedores: "/admin/proveedores",
    Empleados: "/admin/empleados",
    Productos: "/admin/productos",
    "Materias Primas": "/admin/materias",
  },
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
