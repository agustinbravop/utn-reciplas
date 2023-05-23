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
import Button from "../../../components/Button/Button";
import { AddIcon } from "@chakra-ui/icons";
import Input from "../../../components/Input/Input";

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

        <Button variant="disabled" rightIcon={<AddIcon color="grey" />}>
          Crear Nueva
        </Button>
        <div className="search-date">
          <div>
            Desde:
            <input type="date" />
          </div>
          <div>
            Hasta:
            <input type="date" />
          </div>
          <Input name="search" placeholder="Buscar..." width="50%" />
        </div>

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
        <Button variant="secondary" marginTop="20px">
          Imprimir Ventas del Mes
        </Button>
      </div>
    </Layout>
  );
}
