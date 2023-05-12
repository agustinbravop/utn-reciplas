import React from "react";
import FormMovimientos from "../../components/FormMovimientos/FormMovimientos";
import Title from "../../components/Title/Title";
import { findMateriaPrimaByID} from '../../data/materias'


function DetalleMateriaPage({id}) {

  const m = findMateriaPrimaByID({id})

  return (
    <div className="cuerpo">
      <Title >
        {m.descripcion}
      </Title>
      <h2>ID: {m.id} </h2>
      <h2>Depósito: {m.deposito} </h2>
      <h2>Cantidad Actual: {m.cantidad} </h2>
      <FormMovimientos></FormMovimientos>
      <br></br>
      <h2>Historial de Movimientos</h2>
      <h4>Sr. Ventas/Compras agregó 22.14kg. Total: 125,1kg</h4>
    </div>
  );
}

export default DetalleMateriaPage;
