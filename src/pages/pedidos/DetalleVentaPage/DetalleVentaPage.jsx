import React from "react";
import Title from "../../../components/Title/Title";
import { findPedidoByID } from "../../../data/pedidos";
import { findProductoByID } from "../../../data/productos";
import { findClienteByID } from "../../../data/clientes";
import { useNavigate, useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import { Thead, Table, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { findEmpleadoByID } from "../../../data/empleados";
import "./DetalleVentaPage.css";

function LineaProductoVendido({
  id,
  descripcion,
  linea,
  cantidad,
  precioUnitario,
  subtotal,
}) {
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
      <Td>{precioUnitario.toFixed(2)} $</Td>
      <Td>{subtotal.toFixed(2)} $</Td>
    </Tr>
  );
}

function DetalleVentaPage() {
  const { id } = useParams("id");
  const pedido = findPedidoByID(parseInt(id));
  const cliente = findClienteByID(pedido.idClient);
  const precioTotal = pedido.content.reduce(
    (acum, c) => acum + c.price * c.amount,
    0
  );
  const vendedor = findEmpleadoByID(pedido.idSeller);
  const navigate = useNavigate();
  const lineasPedido = pedido.content.map((linea) => {
    const prod = findProductoByID(linea.idProd);

    return (
      <LineaProductoVendido
        id={prod.id}
        descripcion={prod.descripcion}
        linea={prod.linea}
        cantidad={linea.amount}
        precioUnitario={linea.price}
        subtotal={linea.price * linea.amount}
      />
    );
  });

  return (
    <Layout>
      <div className="cuerpo">
        <Title>Pedido de {cliente.name}</Title>
        <h2>
          <b>ID:</b> {pedido.id}
        </h2>
        <h2>
          <b>Estado Actual:</b> {pedido.state}
        </h2>
        <h2>
          <b>Fecha de Venta:</b> {pedido.date}
        </h2>
        <h2>
          <b>Fecha de Entrega:</b> {pedido.deadline}
        </h2>
        <h2
          className="atributo-link"
          onClick={() =>
            navigate(`../../clientes/${cliente.id}`, {
              relative: "path",
            })
          }
        >
          <b>Cliente:</b> {cliente.name}
        </h2>
        <h2
          className="atributo-link"
          onClick={() =>
            navigate(`../../empleados/${vendedor.id}`, {
              relative: "path",
            })
          }
        >
          <b>Vendedor:</b> {vendedor.nombre}
        </h2>
        <h2>
          <b>Productos vendidos:</b>
        </h2>
        <Table variant="striped" colorScheme="gray" size="sm" className="listado-productos-vendidos">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Producto</Th>
              <Th>Tipo</Th>
              <Th>Cant. Vendida</Th>
              <Th>Precio Unitario</Th>
              <Th>Subtotal</Th>
            </Tr>
          </Thead>
          <Tbody>{lineasPedido}</Tbody>
        </Table>
        <h2>
          <b>Precio total:</b> {precioTotal.toFixed(2)} $
        </h2>
      </div>
    </Layout>
  );
}

export default DetalleVentaPage;
