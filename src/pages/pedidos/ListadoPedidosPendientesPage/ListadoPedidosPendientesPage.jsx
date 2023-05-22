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
import Button from "../../../components/Button/Button";
import React from "react";
import Title from "../../../components/Title/Title";
import { Link } from "react-router-dom";
import { findClienteByID } from "../../../data/clientes";
import { findAllPedidosPendientes } from "../../../data/pedidos";

function LineaPedido({ id, idC, estado, fecha }) {
  const cliente = findClienteByID(idC);
  return (
    <Tr key={id}>
      <Td>
        <Link to={`${id}`}>{id}</Link>
      </Td>
      <Td>{cliente.name}</Td>
      <Td>{estado}</Td>
      <Td>{fecha}</Td>
    </Tr>
  );
}

export default function ListadoPedidosPendientesPage() {
  const pedidos = findAllPedidosPendientes();
  const lineasPedidos = pedidos.map((p) => {
    return (
      <LineaPedido
        id={p.id}
        idC={p.idClient}
        estado={p.state}
        fecha={p.deadline}
      />
    ); //REVISAR
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
                <Th>CLIENTE</Th>
                <Th>ESTADO</Th>
                <Th>FECHA DE ENTREGA</Th>
              </Tr>
            </Thead>
            <Tbody>{lineasPedidos}</Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
    </Layout>
  );
}
