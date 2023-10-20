import React from "react";
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import "./NuevoProveedorPage.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";

function NuevoProveedor() {
  const options = ["Maderas", "Plasticos", "Insumos varios", "Otros"];

  return (
    <div className="cuerpo nuevo-proveedor-form">
      <div className="input-doble">
        <Input name="name" label="Nombre" placeholder="Nombre..."></Input>
        <Input name="mail" label="Correo" placeholder="correo@example"></Input>
      </div>
      <div className="input-doble">
        <Input name="cel" label="Celular" placeholder="..."></Input>
        <Input name="cuit" label="CUIT" placeholder="..."></Input>
      </div>
      <h4>Provee:</h4>
      <CheckboxGroup options={options} />
      <Button width="50%" marginLeft="25%">
        Cargar Proveedor
      </Button>
      <Button width="50%" marginLeft="25%" to="./.." variant="secondary">
        Cancelar
      </Button>
    </div>
  );
}

export default function NuevoProveedorPage() {
  return (
    <Layout>
      <div>
        <Title>Alta de Proveedor</Title>
        <NuevoProveedor />
      </div>
    </Layout>
  );
}
