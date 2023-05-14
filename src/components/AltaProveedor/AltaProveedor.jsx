import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import RadioGroup from "../RadioGroup/RadioGroup";


function AltaProveedor() {
  const options = [ "Madera", "Plastico", "Pallets", "Insumos", "Otros" ];

  return (
    <div className="cuerpo">
      <Input
        name="name"
        label="Nombre"
        placeholder="Nombre..."
      ></Input>
      <Input
        name="mail"
        label="Correo"
        placeholder="correo@example"
      ></Input>
      <Input
        name="cel"
        label="Celular"
        placeholder="122..."
      ></Input>
      <h4>Tipo de Proveedor:</h4>
      <RadioGroup options={options} />
      <Button href="../ventas/proveedores">Cargar Proveedor</Button>
    </div>
  );
}

export default AltaProveedor;
