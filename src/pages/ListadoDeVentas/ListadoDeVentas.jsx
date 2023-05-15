import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaDeVentas from "../../components/LineaDeVentas/LineaDeVentas";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import {Table, Thead, Tbody, Tr, Th, TableContainer,Checkbox} from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";
import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";

const ventas = [
  {
    id: 1,
    nombre: "Robertito",
    fecha: "11/08/200",
    producto: "Mueble",
    unidades: 5,
    tipo: "A2",
    total: 9999,
    isChecked: false,
  },
  {
    id: 2,
    nombre: "Robertito",
    fecha: "11/08/200",
    producto: "Mueble",
    unidades: 5,
    tipo: "A2",
    total: 9999,
    isChecked: false,
  },
  {
    id: 3,
    nombre: "Robertito",
    fecha: "11/08/200",
    producto: "Mueble",
    unidades: 5,
    tipo: "A2",
    total: 9999,
    isChecked: false,
  },
  {
    id: 4,
    nombre: "Robertito",
    fecha: "11/08/200",
    producto: "Mueble",
    unidades: 5,
    tipo: "A2",
    total: 9999,
    isChecked: false,
  },
];

export default function ListadoPedidosPendientesPage() {
  const [allChecked, setAllChecked] = useState(false); // Estado para controlar la selección de todas las casillas
  const [pedidosPendientes, setPedidosPendientes] = useState(ventas);
  

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
    return <LineaDeVentas
    key={pedido.id}
      {...pedido}
      isChecked={pedido.isChecked}
      onItemChecked={handleItemChecked} />;
  });

  return (
    <Layout area="admin">
      <div className="pedidos-pendientes">
          <h1 className="titulo">Ventas</h1>
          <div style={{ display: 'inline-block' }}>
              Inicio
              <Calendar />
            </div>
            <div style={{ display: 'inline-block' }}>
              Fin
              <Calendar />
            </div>
          
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
              <Checkbox
                isChecked={allChecked}
                onChange={handleAllChecked}
               
              >
              Seleccionar Todo
              </Checkbox>
                <Th>NOMBRE</Th>
                <Th>FECHA</Th>
                <Th>PRODUCTO</Th>
                <Th>UNIDADES</Th>
                <Th>TIPO</Th>
                <Th >TOTAL</Th>
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
