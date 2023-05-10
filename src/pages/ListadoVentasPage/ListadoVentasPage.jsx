import Layout from "../../components/Layout/Layout";
import LineaVenta from "../../components/VentaItem/LineaVenta";
import "./Ventas.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

export default function ListadoVentasPage() {
  const ventasTotales = [
    {
      id: 1,
      client: "Jose Lopez",
      product: "Mueble",
      units: 4,
      type: "Mesa",
      unitCost: 1000,
    },
    {
      id: 2,
      client: "Esteban Gimenez",
      product: "Mueble",
      units: 7,
      type: "Silla",
      unitCost: 470,
    },
    {
      id: 3,
      client: "Maria Fernanda",
      product: "Pallet",
      units: 8,
      type: "Mediano",
      unitCost: 285,
    },
  ];

  return (
    <Layout area="admin">
      <div className="Ventas">
        <h1 className="titulo">Listado de Ventas Realizadas</h1>
        <TableContainer>
          <Table variant="striped" colorScheme="teal" size="md">
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
            <Tbody>
              <LineaVenta
                id={1}
                client="Jose Lopez"
                product="Mueble"
                units={4}
                type="Mesa"
                unitCost={1000}
              />
              <LineaVenta
                id={2}
                client="Esteban Gimenez"
                product="Mueble"
                units={7}
                type="Silla"
                unitCost={470}
              />
              <LineaVenta
                id={3}
                client="Maria Fernanda"
                product="Pallet"
                units={8}
                type="Mediano"
                unitCost={285}
              />
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
