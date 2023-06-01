import React from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

function VentasHomePage() {
  return (
    <Layout>
      <div className="cuerpo">
        <Title>Bienvenido a Ventas</Title>
        <div className="botones">
          <Button size="lg" to="/ventas/ventas">
            Ventas
          </Button>
          <Button size="lg" to="/ventas/clientes">
            Clientes
          </Button>
          <Button size="lg" to="/ventas/proveedores">
            Proveedores
          </Button>
          <Button size="lg" to="/ventas/productos">
            Productos
          </Button>
          <Button size="lg" to="/ventas/materias">
            Materias Primas
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default VentasHomePage;
