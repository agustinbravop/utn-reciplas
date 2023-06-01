import React from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

function ComprasHomePage() {
  return (
    <Layout>
      <div className="cuerpo">
        <Title>Bienvenido a Compras</Title>
        <div className="botones">
          <Button size="lg" to="/compras/compras">
            Compras
          </Button>
          <Button size="lg" to="/compras/proveedores">
            Proveedores
          </Button>
          <Button size="lg" to="/compras/productos">
            Productos
          </Button>
          <Button size="lg" to="/compras/materias">
            Materias Primas
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default ComprasHomePage;
