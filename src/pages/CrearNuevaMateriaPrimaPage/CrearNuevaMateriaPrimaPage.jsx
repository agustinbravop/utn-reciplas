import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import Button from "../../components/Button/Button";

function FormCrearMateriaPrima() {
  const options = ["Mala", "Buena", "Excelente"];

  return (
    <form className="cuerpo">
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
      <RadioGroup options={options} />
      <Button href="../prod/materias">Crear Materia Prima</Button>
    </form>
  );
}

function CrearNuevaMateriaPrimaPage() {
  return (
    <Layout>
      <div>
        <Title>Crear Nueva Materia Prima</Title>
        <FormCrearMateriaPrima />
      </div>
    </Layout>
  );
}

export default CrearNuevaMateriaPrimaPage;
