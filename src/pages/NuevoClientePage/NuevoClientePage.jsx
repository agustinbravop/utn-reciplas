import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import Button from "../../components/Button/Button";
import "./NuevoClientePage.css";

function FormNuevoCliente() {
  const options = ["Particular", "Empresa"];

  return (
    <div className="cuerpo nuevo-cliente-form">
      <Input name="name" label="Nombre" placeholder="Nombre..."></Input>
      <Input name="mail" label="Correo" placeholder="correo@example"></Input>
      <Input name="cel" label="Celular" placeholder="..."></Input>
      <Input name="regDate" label="Correo" placeholder="correo@example"></Input>
      <h4>Tipo de Cliente:</h4>
      <RadioGroup options={options} />
      <Button>Cargar Cliente</Button>
    </div>
  );
}

export default function FormNuevoClientePage() {
  return (
    <Layout>
      <Title>Alta de Cliente</Title>
      <FormNuevoCliente />
    </Layout>
  );
}
