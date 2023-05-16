import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaDeDeudores from "../../components/LineaDeDeudores/LineaDeDeudores";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer,Checkbox} from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";
import { color } from "framer-motion";
import { useState } from "react";

const clientes = [
  {
    id: 1,
    isChecked: false,
    nombre: "Roberto",
    correo: "robertito@gmail.com",
    telefono: "3624773377",
    deuda:" $135415",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">PERFIL</a>,
  },
  {
    id: 2,
    isChecked: false,
    nombre: "Roberto",
    correo: "robertito@gmail.com",
    telefono: "3624773377",
    deuda:" $135415",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">PERFIL</a>,
  },
  { 
    id: 3,
    isChecked: false,
    nombre: "Roberto",
    correo: "robertito@gmail.com",
    telefono: "3624773377",
    deuda:" $135415",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">PERFIL</a>,
  },
  { 
    id: 4,
    isChecked: false,
    nombre: "Roberto",
    correo: "robertito@gmail.com",
    telefono: "3624773377",
    deuda:" $135415",
    perfil:<a style={{textDecoration:'underline',color:"blue"}} href="https://www.ejemplo.com">PERFIL</a>,
  },
];


export default function ListadoClientesPage() {
  const [allChecked, setAllChecked] = useState(false); // Estado para controlar la selección de todas las casillas
  const [pedidosPendientes, setPedidosPendientes] = useState(clientes);
  

  const handleAllChecked = () => {
    const updatedPedidos = pedidosPendientes.map((pedido) => {
      return {
        ...pedido,
        isChecked: !allChecked,
      };
    });
    setPedidosPendientes(updatedPedidos);
    setAllChecked(!allChecked);
  };
  const handleItemChecked = (id) => {
    const updatedPedidos = pedidosPendientes.map((pedido) => {
      if (pedido.id === id) {
        return {
          ...pedido,
          isChecked: !pedido.isChecked,
        };
      }
      return pedido;
    });
    setPedidosPendientes(updatedPedidos);
  };

  const lineaDePedidoPendiente= pedidosPendientes.map((pedido) => {
    return <LineaDeDeudores
    key={pedido.id}
      {...pedido}
      isChecked={pedido.isChecked}
      onItemChecked={handleItemChecked} />;
  });

  return (
    <Layout area="admin">
      <div className="pedidos-pendientes">
          <h1 className="titulo">DEUDORES</h1>
          <div className="search">
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
              <Checkbox
                isChecked={allChecked}
                onChange={handleAllChecked}
               
              >
              Seleccionar Todo
              </Checkbox>
                <Th>NOMBRE</Th>
                <Th>CORREO</Th>
                <Th>TELEFONO</Th>
                <Th>DEUDA</Th>
                <Th ></Th>
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


