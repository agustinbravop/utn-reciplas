import React from "react";
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import "./NuevoProveedorPage.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";

function NuevoProveedor() {
  const options = ["Maderas", "Plasticos", "Insumos varios", "Otros"];

  return (
    <div className="cuerpo nuevo-proveedor-form">
      <Input name="name" label="Nombre" placeholder="Nombre..."></Input>
      <Input name="mail" label="Correo" placeholder="correo@example"></Input>
      <Input name="cel" label="Celular" placeholder="122..."></Input>
      <h4>Tipo de Proveedor:</h4>
      <RadioGroup options={options} />
      <Button>Cargar Proveedor</Button>
    </div>
  );
}

export default function NuevoProveedorPage() {
  return (
    <Layout area="ventas">
      <div>
        <Title>Alta de Proveedor</Title>
        <NuevoProveedor />
      </div>
    </Layout>
  );
}
