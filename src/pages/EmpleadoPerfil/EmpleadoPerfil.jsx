import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaPedidoPendiente from "../../components/LineaEmpleados/LineaEmpleados";
import "./EmpleadoPerfil.css";
import { Table, Thead, Tbody, Tr, Td ,Th, TableContainer } from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";
import { color } from "framer-motion";
import { EditIcon } from "@chakra-ui/icons";

const pedidosPendientes = [
  {
    id: 1,
    nombre: "Plástico ABC",
    sector: "Excelente",
    telefono: "A2",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="/admin/empleado/perfil">PERFIL</a>,

  },
];

export default function ListadoPedidosPendientesPage() {
  return (
    <Layout area="admin">
      <div className="pedidos-pendientes">
          <h1 className="titulo"> Empleados:Perfil: Robertito</h1>
      </div>
      <div style={{ justifyContent: 'center' }}>

          
        <TableContainer style={{borderSpacing: '55 52px' }}>
          <Table variant="striped" colorScheme="gray" size="sm">
            <Tbody style={{ marginBottom: '300px' }}> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
            <Tbody> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
            <Tbody> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
            <Tbody> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
            <Tbody> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
            <Tbody> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
            <Tbody> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
            <Tbody> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
            <Tbody> 
              <Td>NOMBRE:</Td>
              <Td>NOMBRE:</Td>
              <Button> <EditIcon></EditIcon></Button>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      </Layout>
  );
}
