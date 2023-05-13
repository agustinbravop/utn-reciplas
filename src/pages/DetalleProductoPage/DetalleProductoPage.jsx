import React from "react";
import FormMovimientos from "../../components/FormMovimientos/FormMovimientos";
import Title from "../../components/Title/Title";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";
import { findProductoByID } from "../../data/productos";

function DetalleMateriaPage() {
  const { id } = useParams("id");
  const prod = findProductoByID(parseInt(id));
  return (
    <Layout>
      <div className="cuerpo">
        <Title>{prod.descripcion}</Title>
        <h2>ID: {prod.id}</h2>
        <h2>Línea: {prod.linea}</h2>
        <h2>Depósito: {prod.deposito} </h2>
        <h2>Cantidad Actual: {prod.cantidad}</h2>
        <br></br>
        <FormMovimientos></FormMovimientos>
        <br></br>
        <h2>Historial de Movimientos</h2>
        <h4>Sr. Ventas/Compras agregó 22.14kg. Total: 125,1kg</h4>
      </div>
    </Layout>
  );
}

export default DetalleMateriaPage;
