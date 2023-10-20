import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "../ProdHomePage/ProdHomePage.css";

function ProdHomePage() {
  return (
    <Layout>
      <div className="cuerpo">
        <Title text="Bienvenido al Área de Producción">
          Bienvenido a Producción
        </Title>
        <div className="botones">
          <Button size="lg" to="/prod/pedidos">
            Pedidos Pendientes
          </Button>
          <Button size="lg" to="/prod/productos">
            Productos
          </Button>
          <Button size="lg" to="/prod/materias">
            Materias Primas
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default ProdHomePage;
