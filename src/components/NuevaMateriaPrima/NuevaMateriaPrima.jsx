import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import RadioGroup from "../RadioGroup/RadioGroup";
import "../NuevaMateriaPrima/NuevaMateriaPrima.css"

function NuevaMateriaPrima() {
  const options = ["Mala", "Buena", "Excelente"];

  return (
    <div className="cuerpo">
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
    </div>
  );
}

export default NuevaMateriaPrima;
