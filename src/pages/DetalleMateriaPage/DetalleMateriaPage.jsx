import React from "react";
import Title from "../../components/Title/Title";
import { findMateriaPrimaByID } from "../../data/materias";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import Button from "../../components/Button/Button";
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
        <h2>ID: {m.id} </h2>
        <h2>Depósito: {m.deposito} </h2>
        <h2>Cantidad Actual: {m.cantidad} </h2>
        <FormMovimientos />
        <br></br>
        <h2>Historial de Movimientos</h2>
        <h4>Sr. Ventas/Compras agregó 22.14kg. Total: 125,1kg</h4>
      </div>
    </Layout>
  );
}

export default DetalleMateriaPage;
