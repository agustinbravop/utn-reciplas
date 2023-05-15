import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaProducto from "../../components/LineaProducto/LineaProducto";
import "../ListadoProductosPage/ListadoProductosPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Button from "../../components/Button/Button";
import { React } from "react";
import { findAllProductos } from "../../data/productos";
import { useLocation } from "react-router-dom";

export default function ListadoProductosPage() {
  const productos = findAllProductos();
  const lineaDeProducto = productos.map((producto) => {
    return <LineaProducto {...producto} />;
  });

  const url = useLocation();
  const a = url.pathname === "/ventas/productos" ? "ventas" : "prod";
  const agregar =
    a === "prod" ? (
      <Button href="crear" rightIcon={<AddIcon color="black" />}>
        Agregar
      </Button>
    ) : (
      ""
    );

  return (
    <Layout>
      <div className="pedidos-pendientes">
        <h1 className="titulo">Productos Elaborados</h1>
        <div className="search">
          {agregar}
          <Input name="search" label="" placeholder="Buscar..." width="50%" />
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
            <Tbody>{lineaDeProducto}</Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
    </Layout>
  );
}
