import React from 'react'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import { OptionRadio3 } from '../OptionRadio/OptionRadio'

function NuevaMateriaPrima() {
  return (
    <div>
        <Input name='InputNombreMateriaPrima' label='Nombre' placeholder='Nombre...'></Input>
        <Input name='InputDepositoMateriaPrima' label='Depósito' placeholder='Sector...' ></Input>
        <OptionRadio3 option1='Mala' option2='Buena' option3='Excelente'></OptionRadio3>
        <Button>Crear Materia Prima</Button>
    </div>
  )
}

export default NuevaMateriaPrima