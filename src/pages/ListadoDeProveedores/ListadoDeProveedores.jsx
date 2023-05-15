import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaDeProveedores from "../../components/LineaDeProveedores/LineaDeProveedores";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";
import { color } from "framer-motion";

const proveedores = [
  {
    nombre: "Roberto",
    correo: "roberto@gmail.com",
    telefono: "999999",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">PERFIL</a>,
  },
  {
    nombre: "Roberto",
    correo: "roberto@gmail.com",
    telefono: "999999",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">PERFIL</a>,
  },
  {
    nombre: "Roberto",
    correo: "roberto@gmail.com",
    telefono: "999999",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">PERFIL</a>,
  },
  {
    nombre: "Roberto",
    correo: "roberto@gmail.com",
    telefono: "999999",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">PERFIL</a>,
  },
];

export default function ListadoDeProveedoresPage() {
  const lineaDeProveedores= proveedores.map((pedidos) => {
    return <LineaDeProveedores{...pedidos} />;
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
            <Tbody>{lineaDeProveedores}</Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
      </Layout>
  );
}
