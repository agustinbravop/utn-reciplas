import React from "react";
import Title from "../../components/Title/Title";
import { findClienteByID } from "../../data/clientes";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";


export default function DetalleClientePage() {
  
  const { id } = useParams("id");
  const m = findClienteByID(parseInt(id));
  return (
    <Layout area="ventas">
      <div className="cuerpo">
        <Title>{m.name}</Title>
        <h2>ID: {m.id} </h2>
        <h2>Tipo de Cliente: {m.tipo} </h2>
        <h2>Fecha de Registro: {m.regDate} </h2>
        <h2>Celular: {m.cel} </h2>
        <h2>Correo: {m.mail} </h2>
        <h2>Deuda: {m.debt} </h2>
        <br></br>
        <h2>Historial de Compras</h2>
        <h4>10/05/23 | 5 | Mueble | $6700</h4>
      </div>
    </Layout>
  );
}
//Mejorar  historial de compras