import React from "react";
import Title from "../../../components/Title/Title";
import { findPedidoByID } from "../../../data/pedidos";
import { findProductoByID } from "../../../data/productos";
import { findClienteByID } from "../../../data/clientes";
import { useNavigate, useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Button from "../../../components/Button/Button";
import { Thead, Table, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import "./DetallePedidoPendientePage.css";

const options = ["En fabricación", "En entrega", "Finalizado"];

function FormEstado({ state }) {
  // Evito los estados anteriores al actual para no mostrarlos.
  const limitedOptions = options.slice(options.indexOf(state));
  return (
    <div className="pedido-pendiente-estado-form">
      <h2>
        <b>Estado:</b>
      </h2>
      <RadioGroup options={limitedOptions} />
      <Button>Cambiar Estado</Button>
    </div>
  );
}

function LineaProducto({ id, descripcion, linea, cantidad, stock }) {
  const navigate = useNavigate();
  return (
    <Tr
      key={id}
      onClick={() =>
        navigate(`../../productos/${id}`, {
          relative: "path",
        })
      }
    >
      <Td>{id}</Td>
      <Td>{descripcion}</Td>
      <Td>{linea}</Td>
      <Td>{cantidad}</Td>
      <Td>{stock}</Td>
    </Tr>
  );
}

function DetallePedidoPendientePage() {
  const { id } = useParams("id");
  const pedido = findPedidoByID(parseInt(id));
  const cliente = findClienteByID(pedido.idClient);

  const lineasPedido = pedido.content.map((linea) => {
    const producto = findProductoByID(linea.idProd);

    return (
      <LineaProducto
        id={producto.id}
        descripcion={producto.descripcion}
        linea={producto.linea}
        cantidad={linea.amount}
        stock={producto.unidades}
      />
    );
  });

  return (
    <Layout>
      <div className="cuerpo">
        <Title>Pedido de {cliente.name} </Title>
        <h2>
          <b>ID:</b> {pedido.id}
        </h2>
        <h2>
          <b>Estado Actual:</b> {pedido.state}
        </h2>
        <h2>
          <b>Fecha de Entrega:</b> {pedido.deadline}
        </h2>
        <h2>
          <b>Productos:</b>
        </h2>
        <Table size="sm" className="listado-productos-pedidos">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Producto</Th>
              <Th>Tipo</Th>
              <Th>Cant. Solicitada</Th>
              <Th>En Stock</Th>
            </Tr>
          </Thead>
          <Tbody>{lineasPedido}</Tbody>
        </Table>
        <FormEstado state={pedido.state} />
      </div>
    </Layout>
  );
}

export default DetallePedidoPendientePage;
