import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

const areasToNavLinks = {
  prod: {
    "Pedidos Pendientes": "/prod/pedidos",
    Productos: "/prod/productos",
    "Materias Primas": "/prod/materias",
  },
  compras: {
    Compras: "/compras/compras",
    Proveedores: "/compras/proveedores",
    Productos: "/compras/productos",
    "Materias Primas": "/compras/materias",
  },
  ventas: {
    Ventas: "/ventas/ventas",
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
  if (location.pathname.split(area).at(-1).length <= 1) {
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
