import React from "react";
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Button from "../../../components/Button/Button";
import "./NuevaMateriaPage.css";

function FormCrearMateriaPrima() {
  const options = ["Mala", "Buena", "Excelente"];

  return (
    <form className="nueva-materia-form">
      <div className="input-doble">
        <Input
          name="InputNombreMateriaPrima"
          label="Nombre"
          placeholder="Nombre..."
        ></Input>
        <Input
          name="InputDepositoMateriaPrima"
          label="Depósito"
          placeholder="Sector..."
        ></Input>
      </div>
      <p>Calidad</p>
      <RadioGroup options={options} />
      <Button marginLeft="25%" width="50%">
        Crear
      </Button>
      <Button marginLeft="25%" width="50%" variant="secondary" to="./..">
        Cancelar
      </Button>
    </form>
  );
}

function NuevaMateriaPage() {
  return (
    <Layout>
      <Title>Crear Nueva Materia Prima</Title>
      <FormCrearMateriaPrima />
    </Layout>
  );
}

export default NuevaMateriaPage;
