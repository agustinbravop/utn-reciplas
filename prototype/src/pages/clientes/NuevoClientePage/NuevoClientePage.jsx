import React from "react";
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Button from "../../../components/Button/Button";
import "./NuevoClientePage.css";

function FormNuevoCliente() {
  const options = ["Particular", "Empresa"];

  return (
    <div className="cuerpo nuevo-cliente-form">
      <div className="input-doble">
        <Input name="name" label="Nombre" placeholder="Nombre..."></Input>
        <Input name="mail" label="Correo" placeholder="correo@example"></Input>
      </div>
      <div className="input-doble">
        <Input name="cel" label="Celular" placeholder="..."></Input>
        <div>
          <h4>Tipo de Cliente:</h4>
          <RadioGroup marginTop="15px" options={options} />
        </div>
      </div>
      <Button width="50%" marginLeft="25%">
        Cargar Cliente
      </Button>
      <Button width="50%" marginLeft="25%" variant="secondary" to="./..">
        Cancelar
      </Button>
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
