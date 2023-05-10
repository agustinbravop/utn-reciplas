import Layout from "../../components/Layout/Layout";
import LineaVenta from "../../components/VentaItem/LineaVenta";
import "./ListadoVentasPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

const ventas = [
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

export default function ListadoVentasPage() {

  const lineasDeVenta = ventas.map((venta) => {
    return (
      <LineaVenta
        id={venta.id}
        client={venta.client}
        product={venta.product}
        units={venta.units}
        type={venta.type}
        unitCost={venta.unitCost}
      />
    );
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
            <Tbody>
              {lineasDeVenta}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
