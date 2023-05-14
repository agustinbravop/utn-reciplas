import React from "react";
import Title from "../../components/Title/Title";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";
import { findProductoByID } from "../../data/productos";
import User from "../../components/User/User";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./DetalleProductoPage.css"

function Movimientos({ movimientos }) {
  const lineas = movimientos?.map((m) => {
    const verbo = m.cantidad > 0 ? "agregó" : "quitó";
    return (
      <p style={{ marginBottom: "5px" }}>
        {m.fecha}:<User userName={m.usuario}></User>
        {verbo} {Math.abs(m.cantidad)} unidades
      </p>
    );
  });
  return (
    <>
      <Title kind="subtitle">Historial de Movimientos</Title>
      {lineas}
    </>
  );
}

function FormMovimientos() {
  const options = ["Ingreso", "Egreso"];
  return (
    <div className="producto-movimiento-form">
      <Input
        name="InputCantidad"
        label="Cantidad a Mover"
        placeholder="0..."
      ></Input>
      <RadioGroup options={options} />
      <Button>Guardar Movimiento</Button>
    </div>
  );
}

function DetalleProductoPage() {
  const { id } = useParams("id");
  const prod = findProductoByID(parseInt(id));
  return (
    <Layout>
      <div className="cuerpo">
        <Title>{prod.descripcion}</Title>
        <h2>
          <b>ID:</b> {prod.id}
        </h2>
        <h2>
          <b>Línea:</b> {prod.linea}
        </h2>
        <h2>
          <b>Depósito:</b> {prod.deposito}{" "}
        </h2>
        <h2>
          <b>Unidades actuales:</b> {prod.cantidad}
        </h2>
        <br></br>
        <FormMovimientos />
        <br></br>
        <Movimientos movimientos={prod.movimientos}></Movimientos>
      </div>
    </Layout>
  );
}

export default DetalleProductoPage;
