import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaDeCompras from "../../components/ReporteCompras/ReporteCompras";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Button from "../../components/Button/Button";
import { React } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import Calendar from "../../components/Calendar/Calendar";



const compras = [
  {
    id: "xxxx",
    fecha: "11/08/200",
    producto:"Nombre1",
    cantidad: "xxx",
    total:"$9999"
  },
  {
    id: "xxxx",
    fecha: "11/08/200",
    producto:"Nombre2",
    cantidad: "xxx",
    total:"$9999"
  },
  {
    id: "xxxx",
    fecha: "11/08/200",
    producto:"Nombre3",
    cantidad: "xxx",
    total:"$9999"
  },
  {
    id: "xxxx",
    fecha: "11/08/200",
    producto:"Nombre4",
    cantidad: "xxx",
    total:"$9999"
  },
  {
    cantidad:"TOTAL:",
    total: "$999999"
  },
];

export default function ListadoPedidosPendientesPage() {
  const lineaDeCompras= compras.map((compras) => {
    return <LineaDeCompras {...compras} />;
  });

  return (
    <Layout area="admin">
      <div className="pedidos-pendientes">
          <h1 className="titulo">COMPRAS</h1>
          <Button>Todos</Button>
          <div className="search">
            <div>Inicio  <Calendar></Calendar></div> 
            <div>Fin  <Calendar></Calendar></div> 
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
                <Th>FECHA</Th>
                <Th>PRODUCTO</Th>
                <Th>CANTIDAD</Th>
                <Th>TOTAL</Th>
              </Tr>
            </Thead>
            <Tbody>{lineaDeCompras}</Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
      </Layout>
  );
}
