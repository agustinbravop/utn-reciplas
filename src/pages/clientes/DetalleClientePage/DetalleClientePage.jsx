import React from "react";
import { findClienteByID } from "../../../data/clientes";
import { useNavigate, useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Stack,
  Text,
  StackDivider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import "./DetalleClientePage.css";
import Title from "../../../components/Title/Title";
import { findAllPedidosByClientID } from "../../../data/pedidos";
import { findProductoByID } from "../../../data/productos";
import EditableText from "../../../components/EditableText/EditableText";
import Button from "../../../components/Button/Button";

function LineaCompra({ id, date, content }) {
  const navigate = useNavigate();
  const precioTotal = content.reduce((acum, c) => acum + c.price * c.amount, 0);
  const productos = content
    .map((c) => findProductoByID(c.idProd))
    .map((prod) => prod.descripcion)
    .join(", ");

  return (
    <Tr
      onClick={() =>
        navigate(`../../ventas/${id}`, {
          relative: "path",
        })
      }
      key={id}
    >
      <Td>{id}</Td>
      <Td>{date}</Td>
      <Td isNumeric>{precioTotal.toFixed(2)} $</Td>
      <Td inlineSize="350px">{productos}</Td>
    </Tr>
  );
}

function HistorialCompras({ compras }) {
  const lineasCompra = compras.map((c) => <LineaCompra {...c} />);
  return (
    <Table size="sm" className="historial-compras">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Fecha</Th>
          <Th isNumeric>Precio Total</Th>
          <Th>Productos</Th>
        </Tr>
      </Thead>
      <Tbody>{lineasCompra}</Tbody>
    </Table>
  );
}

export default function DetalleClientePage() {
  const { id } = useParams("id");
  const cliente = findClienteByID(parseInt(id));
  const compras = findAllPedidosByClientID(cliente.id);

  return (
    <Layout>
      <div className="cuerpo">
        <Card>
          <CardHeader>
            <Heading size="md">Cliente: {cliente.name}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="3">
              <Box>
                <Heading size="xs">Correo</Heading>
                <EditableText defaultValue={cliente.mail} />
              </Box>
              <Box>
                <Heading size="xs">Celular</Heading>
                <EditableText defaultValue={cliente.cel} />
              </Box>
              <Box>
                <Heading size="xs">Tipo</Heading>
                <EditableText defaultValue={cliente.tipo} />
              </Box>
              <Box>
                <Heading size="xs">Fecha de Registro</Heading>
                <EditableText defaultValue={cliente.regDate} />
              </Box>
              <Box>
                <Heading size="xs">Deuda Actual</Heading>
                <EditableText defaultValue={cliente.debt} />
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Title variant="subtitle">Historial de Compras:</Title>
        <HistorialCompras compras={compras} />
        <Button variant="danger">Eliminar cliente</Button>
      </div>
    </Layout>
  );
}
