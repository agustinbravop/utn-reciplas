import React from "react";
import FormMovimientos from "../../components/FormMovimientos/FormMovimientos";
import Title from "../../components/Title/Title";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";
import { findProductoByID } from "../../data/productos";
import User from "../../components/User/User";

function Movimientos({ movimientos }) {
  const lineas = movimientos?.map((m) => {
    const verbo = m.cantidad > 0 ? "agregó" : "quitó";
    return (
      <p style={{ marginBottom: "5px" }}>
        {m.fecha}:<User userName={m.usuario}></User>
        {verbo} {Math.abs(m.cantidad)} unidades
      </p>
    );
  });
  return (
    <>
      <Title kind="subtitle">Historial de Movimientos</Title>
      {lineas}
    </>
  );
}
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
        <h2>Unidades actuales: {prod.cantidad}</h2>
        <br></br>
        <FormMovimientos></FormMovimientos>
        <br></br>
        <Movimientos movimientos={prod.movimientos}></Movimientos>
      </div>
    </Layout>
  );
}

export default DetalleMateriaPage;
