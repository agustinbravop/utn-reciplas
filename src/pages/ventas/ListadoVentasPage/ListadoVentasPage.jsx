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
import { findAllVentas } from "../../../data/ventas";
import Title from "../../../components/Title/Title";

function LineaVenta({ id, client, product, units, type, unitCost }) {
  return (
    <Tr key={id}>
      <Td>{client}</Td>
      <Td>{product}</Td>
      <Td>{type}</Td>
      <Td>{units}</Td>
      <Td>$ {unitCost}</Td>
      <Td>$ {unitCost * units}</Td>
    </Tr>
  );
}

export default function ListadoVentasPage() {
  const ventas = findAllVentas();
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
                <Th>Cliente</Th>
                <Th>Producto</Th>
                <Th>Tipo</Th>
                <Th isNumeric>Unidades</Th>
                <Th isNumeric>Costo Unitario</Th>
                <Th isNumeric>Costo Total</Th>
              </Tr>
            </Thead>
            <Tbody>{lineasDeVenta}</Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}