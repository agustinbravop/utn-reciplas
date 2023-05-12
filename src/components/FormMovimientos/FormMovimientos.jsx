import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import RadioGroup from "../RadioGroup/RadioGroup";

export default function FormMovimientos() {
  const options = ["Ingreso", "Egreso"];
  return (
    <div>
      <Input
        name="InputCantidad"
        label="Cantidad a Mover"
        placeholder="0..."
      ></Input>
      <RadioGroup options={options} />
      <Button href="../prod/materias/detalle">Crear Materia Prima</Button>
    </div>
  );
}
