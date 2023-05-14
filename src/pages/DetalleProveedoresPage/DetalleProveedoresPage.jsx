import React from "react";
import Title from "../../components/Title/Title";
import { findProveedoresById } from "../../data/proveedores";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";


export default function DetalleProveedoresPage() {
  
  const { id } = useParams("id");
  const p = findProveedoresById(parseInt(id));
  return (
    <Layout area="ventas">
      <div className="cuerpo">
        <Title>{p.name}</Title>
        <h2>ID: {p.id} </h2>
        <h2>Tipo de Proveedor: {p.tipo} </h2>
        <h2>Celular: {p.cel} </h2>
        <h2>Correo: {p.mail} </h2>
        <br></br>
      </div>
    </Layout>
  );
}
//Mejorar  historial de compras