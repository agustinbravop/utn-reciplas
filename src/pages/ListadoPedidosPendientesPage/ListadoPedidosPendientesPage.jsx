import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer, Td } from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import Button from "../../components/Button/Button";
import { React } from "react";
import { findAllPedidosPendientes } from "../../data/pedidos";

function LineaPedidoPendiente({
  id,
  descripcion,
  calidad,
  deposito,
  cantidad,
  ultimoCambio,
}) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>{descripcion}</Td>
      <Td>{calidad}</Td>
      <Td>{deposito}</Td>
      <Td>{cantidad} kg</Td>
      <Td>{ultimoCambio}</Td>
      <Td>
        <EditIcon></EditIcon>
      </Td>
    </Tr>
  );
}

export default function ListadoPedidosPendientesPage() {
  const pedidosPendientes = findAllPedidosPendientes();
  const lineaDePedidoPendiente = pedidosPendientes.map((pedidos) => {
    return <LineaPedidoPendiente {...pedidos} />;
  });

  return (
    <Layout>
      <div className="pedidos-pendientes">
        <h1 className="titulo">Pedidos Pendientes</h1>
        <div className="search">
          <Button href="agregar" rightIcon={<AddIcon color="black" />}>
            Agregar
          </Button>
          <Input name="search" label="" placeholder="Buscar..." width="50%" />
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Descripción</Th>
                <Th>Calidad</Th>
                <Th>Depósito</Th>
                <Th>Cantidad</Th>
                <Th>Último Cambio</Th>
              </Tr>
            </Thead>
            <Tbody>{lineaDePedidoPendiente}</Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
    </Layout>
  );
}
