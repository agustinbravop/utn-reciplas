import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaPedidoPendiente from "../../components/LineaPedidoPendiente/LineaPedidoPendiente";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";

const pedidosPendientes = [
  {
    id: 1,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40",
  },
  {
    id: 2,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40",
  },
  {
    id: 3,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40",
  },
  {
    id: 4,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40",
  },
];

export default function ListadoPedidosPendientesPage() {
  const lineaDePedidoPendiente= pedidosPendientes.map((pedidos) => {
    return <LineaPedidoPendiente {...pedidos} />;
  });

  return (
    <Layout area="prod">
      <div className="pedidos-pendientes">
          <h1 className="titulo">Pedidos Pendientes</h1>
          <div className="search">
          <Button href="agregar" rightIcon={<AddIcon color="black" />}>
            Agregar
          </Button>
          <Input
            name="search"
            label=''
            placeholder="Buscar..."
            width="50%"
          />
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
