import React from "react";
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import "./NuevoEmpleadoPage.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";

function NuevoEmpleado() {
  const options = ["Administración", "Compras", "Ventas", "Producción"];

  return (
    <div className="cuerpo nuevo-empleado-form">
      <div className="input-doble">
        <Input name="name" label="Nombre" placeholder="Nombre..."></Input>
        <Input name="telefono" label="Telefono" placeholder="..."></Input>
      </div>
      <h4>Área en la que trabaja:</h4>
      <RadioGroup options={options} />
      <Button marginLeft="25%" width="50%">
        Cargar
      </Button>
      <Button marginLeft="25%" width="50%" variant="secondary" to="./..">
        Cancelar
      </Button>
    </div>
  );
}

export default function NuevoEmpleadoPage() {
  return (
    <Layout>
      <div>
        <Title>Cargar Nuevo Empleado</Title>
        <NuevoEmpleado />
      </div>
    </Layout>
  );
}
