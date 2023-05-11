import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

function ProdHomePage() {
  return (
    <Layout area="prod">
      <div>
        <Title text="Bienvenido al Área de Producción"></Title>
        <div className="row">
          <Button name="materiasPrimasProd" href="/prod/ListadoMateriasPrimas">Materias Primas</Button> 
          <Button name="productosProd" href="">Productos</Button> 
          <Button name="pedidosPendientesProd" href="">Pedidos Pendientes</Button> 
        </div>
      </div>
    </Layout>
  );
}

export default ProdHomePage;
