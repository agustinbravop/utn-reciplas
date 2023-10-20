import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

function AdminHomePage() {
  return (
    <Layout>
      <div className="cuerpo">
        <Title>Bienvenido a Administración</Title>
        <div className="botones">
          <Button size="lg" to="/admin/compras">
            Compras
          </Button>
          <Button size="lg" to="/admin/ventas">
            Ventas
          </Button>
          <Button size="lg" to="/admin/clientes">
            Clientes
          </Button>
          <Button size="lg" to="/admin/proveedores">
            Proveedores
          </Button>
          <Button size="lg" to="/admin/empleados">
            Empleados
          </Button>
          <Button size="lg" to="/admin/productos">
            Productos
          </Button>
          <Button size="lg" to="/admin/materias">
            Materias Primas
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default AdminHomePage;
