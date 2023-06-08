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
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function Movimientos({ movimientos }) {
  const lineas = movimientos?.map((m) => {
    const verbo = m.unidades > 0 ? "agregó" : "quitó";
    return (
      <p style={{ marginBottom: "5px" }}>
        {m.fecha}:<User userName={m.usuario}></User>
        {verbo} {Math.abs(m.unidades)} unidades. Motivo: {m.motivo}.
      </p>
    );
  });
  return (
    <>
      <Title variant="subtitle">Historial de Movimientos del Stock:</Title>
      {lineas}
    </>
  );
}

function FormMovimientos() {
  const options = ["Ingreso", "Egreso"];
  return (
    <div className="producto-movimiento-form">
      <Input name="unidades" label="Unidades a Mover" placeholder="0"></Input>
      <Input name="motivo" label="Motivo" placeholder="..."></Input>
      <RadioGroup options={options} />
    </div>
  );
}

function FormMovimientosModal({ descripcion }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} margin="15px" variant="secondary">
        Nuevo Movimiento
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Movimiento de '{descripcion}'</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormMovimientos />
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button variant="secondary">Cancelar</Button>
            <Button marginLeft="10px">Guardar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function DetalleProductoPage() {
  const { id } = useParams("id");
  const prod = findProductoByID(parseInt(id));
  const url = useLocation();
  const area = url.pathname.split("/")[1];
  const formMovimientosModal = area === "prod" && (
    <FormMovimientosModal descripcion={prod.descripcion} />
  );

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
        {formMovimientosModal}
        <div className="imagen-container">
          <img src={prod.img} alt="imagen del producto" />
        </div>
        <br></br>
        <Movimientos movimientos={prod.movimientos}></Movimientos>
      </div>
    </Layout>
  );
}

export default DetalleProductoPage;
