import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
} from "@chakra-ui/react";
import React from "react";
import Title from "../../../components/Title/Title";
import { Link, useNavigate } from "react-router-dom";
import { findClienteByID } from "../../../data/clientes";
import { findAllPedidosPendientes } from "../../../data/pedidos";
import { findProductoByID } from "../../../data/productos";

function LineaPedido({ id, idClient, state, deadline, content }) {
  const navigate = useNavigate();
  const productos = content
    .map((c) => findProductoByID(c.idProd))
    .map((prod) => prod.descripcion)
    .join(", ");
  return (
    <Tr key={id} onClick={() => navigate(`${id}`)}>
      <Td>{id}</Td>
      <Td>{deadline}</Td>
      <Td>{state}</Td>
      <Td>{productos}</Td>
    </Tr>
  );
}

export default function ListadoPedidosPendientesPage() {
  const pedidos = findAllPedidosPendientes();
  const lineasPedidos = pedidos.map((p) => {
    return <LineaPedido {...p} />;
  });

  return (
    <Layout>
      <div className="listado-materias">
        <Title>Pedidos Pendientes</Title>
        <Input name="search" placeholder="Buscar..." width="50%" />
        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>FECHA DE ENTREGA</Th>
                <Th>ESTADO</Th>
                <Th>PRODUCTOS</Th>
              </Tr>
            </Thead>
            <Tbody>{lineasPedidos}</Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
