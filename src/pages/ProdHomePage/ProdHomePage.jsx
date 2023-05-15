import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "../ProdHomePage/ProdHomePage.css";

function ProdHomePage() {
  return (
    <Layout>
      <div className="cuerpo">
        <Title text="Bienvenido al Área de Producción">Bienvenido a Producción</Title>
        <div className="botones">
          <Button size="lg" href="/prod/materias">Materias Primas</Button>
          <Button size="lg" href="/prod/productos">Productos</Button>
          <Button size="lg" href="/prod/pendientes">Pedidos Pendientes</Button>
        </div>
      </div>
    </Layout>
  );
}

export default ProdHomePage;
