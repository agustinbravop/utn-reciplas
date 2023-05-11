import React from "react";
import Button from "../../components/Button/Button";
import OptionRadio from "../../components/OptionRadio/OptionRadio"
import Input from '../components/Input/Input'

export default function FormMovimientos() {
    return (
    <div>
        <Input name='InputCantidad' label='Cantidad a Mover' placeholder='0...'></Input>
        <OptionRadio option1='Ingreso' option2='Egreso'></OptionRadio>
        <Button>Guardar Movimiento</Button>
    </div>
   )
}
