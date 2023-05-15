import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import RadioGroup from "../RadioGroup/RadioGroup";

function AltaCliente() {
  const options = ["Particular", "Empresa"];

  return (
    <div className="cuerpo">
      <Input name="name" label="Nombre" placeholder="Nombre..."></Input>
      <Input name="mail" label="Correo" placeholder="correo@example"></Input>
      <Input name="cel" label="Celular" placeholder="122..."></Input>
      <Input name="regDate" label="Correo" placeholder="correo@example"></Input>
      <h4>Tipo de Cliente:</h4>
      <RadioGroup options={options} />
      <Input name="debt" label="Deuda" placeholder="$..."></Input>
      <Button href="../ventas/clientes">Cargar Cliente</Button>
    </div>
  );
}

export default AltaCliente;
