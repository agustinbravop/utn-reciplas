<<<<<<< HEAD
import React from "react";
import Layout from "../../components/Layout/Layout";
import "./AdminHomePage.css";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

function AdminHomePage() {
  return (
    <Layout area="admin">
      <div className="container">
      <Title >Bienvenidos al area de Administracion</Title>
      <div className="row">
          <Button href="/admin/reporteClientes">Reporte Clientes</Button>
          <Button href="/admin/reporteProveedores">Reporte Proveedores</Button>
          <Button href="/admin/ventasyCompras">Ventas y Compras</Button>
          <Button href="/admin/materiasPrimas">Materias Primas</Button>
          <Button href="/admin/productos">Productos</Button>
          <Button href="/admin/empleados">Empleados</Button>
          <Button  href="/admin/deudores">Deudores</Button>
          </div>
      </div>
      
    </Layout>
  );
}

export default AdminHomePage;
=======
import React from "react";
import Layout from "../../components/Layout/Layout";

function AdminHomePage() {
  return (
    <Layout>
      <div>AdminHomePage</div>
    </Layout>
  );
}

export default AdminHomePage;
>>>>>>> faeed98b5ce58ad3d141f5209990dd292ae10c69
