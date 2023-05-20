import React from "react";
import Title from "../../../components/Title/Title";
import { findEmpleadoByID } from "../../../data/empleados";
import { useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";

export default function DetalleEmpleadoPage() {
  const { id } = useParams("id");
  const p = findEmpleadoByID(parseInt(id));
  return (
    <Layout>
      <div className="cuerpo">
        <Title>Empleado: {p.nombre}</Title>
        <h2>
          <b>ID:</b> {p.id}{" "}
        </h2>
        <h2>
          <b>Sector:</b> {p.sector}{" "}
        </h2>
        <h2>
          <b>Telefono:</b> {p.telefono}{" "}
        </h2>
        <br></br>
      </div>
    </Layout>
  );
}
//Mejorar  historial de compras
