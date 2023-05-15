
import React from "react";
import Layout from "../../components/Layout/Layout";
import "./AdminHomePage.css";
import Title from "../../components/Title/Title";
import Button from "../../components/ButtonViolet/ButtonViolet";

function AdminHomePage() {
  return (
    <Layout>
      <div className="container">
      <Title >Bienvenidos al area de Administracion</Title>
      <div className="roww">
      <Button style={{ fontSize: '30px' }} href="/admin/productos">Productos</Button>
          <Button style={{ fontSize: '30px' }} href="/admin/Compras">Compras</Button>
          <Button style={{ fontSize: '30px' }} href="/admin/ventas">Ventas</Button>
      </div>
        <div className="roww">
          <Button style={{ fontSize: '30px' }} href="/admin/deudores">Deudores</Button>
          <Button style={{ fontSize: '30px' }} href="/admin/empleados">Empleados</Button>
          <Button style={{ fontSize: '30px' }} href="/admin/reporteClientes">Clientes</Button>
        </div>
        <div className="roww">
          <Button style={{ fontSize: '30px' }} href="/admin/reporteProveedores">Proveedores</Button>
          <Button style={{ fontSize: '30px' }} href="/admin/materias">Materias Primas</Button>

        </div>
      </div>
      
    </Layout>
  );
}

export default AdminHomePage;

