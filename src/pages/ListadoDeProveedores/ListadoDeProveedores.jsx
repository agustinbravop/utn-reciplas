import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaPedidoPendiente from "../../components/LineaDeProveedores/LineaDeProveedores";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";
import { color } from "framer-motion";

const pedidosPendientes = [
  {
    nombre: "Plástico ABC",
    correo: "Excelente",
    telefono: "A2",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">Enlace subrayado</a>,

  },
  {
    nombre: "Plástico ABC",
    correo: "Excelente",
    telefono: "A2",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.google.com">Enlace subrayado</a>,


  },
  {
    nombre: "Plástico ABC",
    correo: "Excelente",
    telefono: "A2",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">Enlace subrayado</a>,

  },
  {
    nombre: "Plástico ABC",
    correo: "Excelente",
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
          <h1 className="titulo">Proveedores</h1>
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
                <Th>NOMBRE</Th>
                <Th>CORREO</Th>
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
