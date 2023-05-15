import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import "./NuevoProductoPage.css";

function FormCrearMateriaPrima() {
  const options = ["Muebles", "Pellets", "Plásticos"];

  return (
    <form className="nuevo-producto-form">
      <Input name="nombre" label="Nombre" placeholder="Nombre..."></Input>
      <Input name="deposito" label="Depósito" placeholder="Sector..."></Input>
      <p>Línea</p>
      <RadioGroup options={options} />
      <Button variant="secondary">Subir imágen +</Button>
      <Button>Crear</Button>
    </form>
  );
}

function NuevoProductoPage() {
  return (
    <Layout>
      <div>
        <Title>Crear Nuevo Producto</Title>
        <FormCrearMateriaPrima />
      </div>
    </Layout>
  );
}

export default NuevoProductoPage;
