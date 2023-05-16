import React from "react";
import Title from "../../components/Title/Title";
import { findProveedoresById } from "../../data/proveedores";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";

export default function DetalleProveedorPage() {
  const { id } = useParams("id");
  const p = findProveedoresById(parseInt(id));
  return (
    <Layout area="ventas">
      <div className="cuerpo">
        <Title>{p.name}</Title>
        <h2>
          <b>ID:</b> {p.id}{" "}
        </h2>
        <h2>
          <b>Tipo de Proveedor:</b> {p.tipo}{" "}
        </h2>
        <h2>
          <b>Celular:</b> {p.cel}{" "}
        </h2>
        <h2>
          <b>Correo:</b> {p.mail}{" "}
        </h2>
        <br></br>
      </div>
    </Layout>
  );
}
//Mejorar  historial de compras
