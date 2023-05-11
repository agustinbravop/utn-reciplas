import React from 'react'
import FormMovimientos from '../../components/FormMovimientos/FormMovimientos'
import Title from '../../components/Title/Title'

function DetalleMateriaPage() {
  return (
    <div className='cuerpo'>
        <Title>no se como poner aca para que redirija del nombre del id seleccionado u.u</Title>
        <h2>ID: </h2>
        <h2>Depósito: </h2>
        <h2>Cantidad Actual: </h2>
        <FormMovimientos></FormMovimientos>
        <br></br>
        <h2>Historial de Movimientos</h2>
        <h4>Sr. Ventas/Compras agregó 22.14kg. Total: 125,1kg</h4>
    </div>
  )
}

export default DetalleMateriaPage