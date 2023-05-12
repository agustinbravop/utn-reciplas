import React from "react";
import Layout from "../../components/Layout/Layout";
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'

function VentasHomePage() {
  return (
    <Layout area="ventas">
      <div className="cuerpo">
        <Title text="Bienvenido al Área de Ventas"></Title>
        <div className="row">
          <Button href="/ventas/clientes">Clientes</Button>
          <Button href="/ventas/productos">Productos</Button>
          <Button href="/ventas/proveedores">Proveedores</Button>
          <Button href="/ventas/materias">Materias Primas</Button>
        </div>
      </div>
    </Layout>
  );
}

export default VentasHomePage;
