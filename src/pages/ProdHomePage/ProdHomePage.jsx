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
          <Button href="/prod/materias">Materias Primas</Button>
          <Button href="/prod/productos">Productos</Button>
          <Button href="/prod/pedidos">Pedidos Pendientes</Button>
        </div>
      </div>
    </Layout>
  );
}

export default ProdHomePage;
