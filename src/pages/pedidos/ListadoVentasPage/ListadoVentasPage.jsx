import Layout from "../../../components/Layout/Layout";
import "./ListadoVentasPage.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
} from "@chakra-ui/react";
import Title from "../../../components/Title/Title";
import { findAllPedidos } from "../../../data/pedidos";
import { findClienteByID } from "../../../data/clientes";
import { useNavigate } from "react-router-dom";
import { findEmpleadoByID } from "../../../data/empleados";

function LineaVenta({
  id,
  idClient,
  idSeller,
  date,
  state,
  deadline,
  content,
}) {
  const precioTotal = content.reduce((acum, c) => acum + c.price * c.amount, 0);
  const client = findClienteByID(idClient);
  const seller = findEmpleadoByID(idSeller);
  const navigate = useNavigate();

  return (
    <Tr onClick={() => navigate(`${id}`)} key={id}>
      <Td>{date}</Td>
      <Td>{client.name}</Td>
      <Td>{seller.nombre}</Td>
      <Td>{state}</Td>
      <Td>{deadline}</Td>
      <Td isNumeric>{precioTotal.toFixed(2)} $</Td>
    </Tr>
  );
}

export default function ListadoVentasPage() {
  const ventas = findAllPedidos();
  const lineasDeVenta = ventas.map((venta) => {
    return <LineaVenta {...venta} />;
  });

  return (
    <Layout>
      <div className="Ventas">
        <Title>Ventas Realizadas</Title>
        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>Realizada el</Th>
                <Th>Cliente</Th>
                <Th>Vendedor</Th>
                <Th>Estado</Th>
                <Th>Fecha Entrega</Th>
                <Th>Precio Total</Th>
              </Tr>
            </Thead>
            <Tbody>{lineasDeVenta}</Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
