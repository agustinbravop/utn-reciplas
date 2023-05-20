import React from "react";
import Title from "../../../components/Title/Title";
import { findMateriaPrimaByID } from "../../../data/materias";
import { useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import Input from "../../../components/Input/Input";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Button from "../../../components/Button/Button";
import "./DetalleMateriaPage.css";

function FormMovimientos() {
  const options = ["Ingreso", "Egreso"];
  return (
    <div className="materia-movimiento-form">
      <Input
        name="InputCantidad"
        label="Cantidad a mover (kg)"
        placeholder="0"
      ></Input>
      <RadioGroup options={options} />
      <Button>Guardar Movimiento</Button>
    </div>
  );
}

function DetalleMateriaPage() {
  const { id } = useParams("id");
  const m = findMateriaPrimaByID(parseInt(id));
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
        <FormMovimientos />
        <br></br>
        <Title variant="subtitle">Historial de Movimientos</Title>
        <p>Sr. Ventas/Compras agregó 22.14kg. Total: 125,1kg</p>
      </div>
    </Layout>
  );
}

export default DetalleMateriaPage;
