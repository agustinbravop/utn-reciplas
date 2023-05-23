import React from "react";
import Title from "../../../components/Title/Title";
import { useLocation, useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import { findProductoByID } from "../../../data/productos";
import User from "../../../components/User/User";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./DetalleProductoPage.css";

function Movimientos({ movimientos }) {
  const lineas = movimientos?.map((m) => {
    const verbo = m.unidades > 0 ? "agregó" : "quitó";
    return (
      <p style={{ marginBottom: "5px" }}>
        {m.fecha}:<User userName={m.usuario}></User>
        {verbo} {Math.abs(m.unidades)} unidades.
      </p>
    );
  });
  return (
    <>
      <Title variant="subtitle">Historial de Movimientos</Title>
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
        label="Unidades a Mover"
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
  const url = useLocation();
  const area = url.pathname.split("/")[1];
  const formMovimientos = area === "prod" && <FormMovimientos />;

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
          <b>Unidades actuales:</b> {prod.unidades}
        </h2>
        <br></br>
        <div className="imagen-form-container">
          {formMovimientos}
          <img src={prod.img} alt="imagen del producto" />
        </div>
        <br></br>
        <Movimientos movimientos={prod.movimientos}></Movimientos>
      </div>
    </Layout>
  );
}

export default DetalleProductoPage;
