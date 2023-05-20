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
          <Button size="lg" href="/compras/compras">
            Compras
          </Button>
          <Button size="lg" href="/compras/proveedores">
            Proveedores
          </Button>
          <Button size="lg" href="/compras/productos">
            Productos
          </Button>
          <Button size="lg" href="/compras/materias">
            Materias Primas
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default ComprasHomePage;
