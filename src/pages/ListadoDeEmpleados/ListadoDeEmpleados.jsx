import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaPedidoPendiente from "../../components/LineaEmpleados/LineaEmpleados";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";
import { color } from "framer-motion";

const pedidosPendientes = [
  {
    id: 1,
    nombre: "Plástico ABC",
    sector: "Excelente",
    telefono: "A2",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">Enlace subrayado</a>,

  },
  {
    id: 2,
    nombre: "Plástico ABC",
    sector: "Excelente",
    telefono: "A2",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.google.com">Enlace subrayado</a>,


  },
  {
    id: 3,
    nombre: "Plástico ABC",
    sector: "Excelente",
    telefono: "A2",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">Enlace subrayado</a>,

  },
  {
    id: 4,
    nombre: "Plástico ABC",
    sector: "Excelente",
    telefono: "A2",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">Enlace subrayado</a>,

  },
];

export default function ListadoPedidosPendientesPage() {
  const lineaDePedidoPendiente= pedidosPendientes.map((pedidos) => {
    return <LineaPedidoPendiente {...pedidos} />;
  });

  return (
    <Layout area="admin">
      <div className="pedidos-pendientes">
          <h1 className="titulo">Empleados</h1>
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
                <Th>NUMERO</Th>
                <Th>NOMBRE</Th>
                <Th>SECTOR</Th>
                <Th>TELEFONO</Th>
                <Th >PERFIL</Th>
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
