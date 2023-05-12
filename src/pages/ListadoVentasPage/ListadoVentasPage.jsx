import Layout from "../../components/Layout/Layout";
import LineaVenta from "../../components/VentaItem/LineaVenta";
import "./ListadoVentasPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { findAllVentas } from "../../data/ventas";

export default function ListadoVentasPage() {
  const ventas = findAllVentas();
  const lineasDeVenta = ventas.map((venta) => {
    return <LineaVenta {...venta} />;
  });

  return (
    <Layout area="admin">
      <div className="Ventas">
        <h1 className="titulo">Listado de Ventas Realizadas</h1>
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
