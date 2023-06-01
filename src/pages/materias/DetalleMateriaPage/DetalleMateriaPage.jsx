import React from "react";
import Title from "../../../components/Title/Title";
import { findMateriaPrimaByID } from "../../../data/materias";
import { useLocation, useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import Input from "../../../components/Input/Input";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Button from "../../../components/Button/Button";
import "./DetalleMateriaPage.css";
import User from "../../../components/User/User";

function Movimientos({ movimientos }) {
  const lineas = movimientos?.map((m) => {
    const verbo = m.cantidad > 0 ? "agregó" : "quitó";
    return (
      <p style={{ marginBottom: "5px" }}>
        {m.fecha}:<User userName={m.usuario}></User>
        {verbo} {Math.abs(m.cantidad)} kg. Motivo: {m.motivo}.
      </p>
    );
  });
  return (
    <>
      <Title variant="subtitle">Historial de Movimientos del Stock:</Title>
      {lineas}
    </>
  );
}

function FormMovimientos() {
  const options = ["Ingreso", "Egreso"];
  return (
    <div className="materia-movimiento-form">
      <Input
        name="cantidad"
        label="Cantidad a mover (kg)"
        placeholder="0"
      ></Input>
      <Input name="motivo" label="Motivo" placeholder="..."></Input>
      <RadioGroup options={options} />
      <Button>Guardar Movimiento</Button>
    </div>
  );
}

function DetalleMateriaPage() {
  const { id } = useParams("id");
  const m = findMateriaPrimaByID(parseInt(id));
  const url = useLocation();
  const area = url.pathname.split("/")[1];
  const formMovimientos = area === "prod" && <FormMovimientos />;

  return (
    <Layout>
      <div className="cuerpo">
        <Title>{m.descripcion}</Title>
        <h2>
          <b>ID:</b> {m.id}{" "}
        </h2>
        <h2>
          <b>Depósito:</b> {m.deposito}{" "}
        </h2>
        <h2>
          <b>Cantidad Actual:</b> {m.cantidad} kg
        </h2>
        {formMovimientos}
        <br></br>
        <Movimientos movimientos={m.movimientos} />
      </div>
    </Layout>
  );
}

export default DetalleMateriaPage;
