import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import "./ListadoProductosPage.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import Button from "../../../components/Button/Button";
import { React } from "react";
import { findAllProductos } from "../../../data/productos";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../../components/Title/Title";

function LineaProducto({
  id,
  descripcion,
  linea,
  deposito,
  unidades,
  ultimoCambio,
}) {
  const url = useLocation();
  const navigate = useNavigate();
  const edit = url.pathname === "/prod/productos" ? <EditIcon></EditIcon> : "";

  return (
    <Tr
      onClick={() => navigate(`${id}`)}
      key={id}
      className={unidades === 0.0 && "linea-agotado"}
    >
      <Td>{id}</Td>
      <Td>{descripcion}</Td>
      <Td>{linea}</Td>
      <Td>{deposito}</Td>
      <Td>{unidades}</Td>
      <Td>{ultimoCambio}</Td>
      <Td>{edit}</Td>
    </Tr>
  );
}

export default function ListadoProductosPage() {
  const productos = findAllProductos();
  const lineaDeProducto = productos.map((producto) => {
    return <LineaProducto {...producto} />;
  });

  const url = useLocation();
  const area = url.pathname.split("/")[1];
  const btnAgregar = area === "admin" && (
    <Button href="crear" rightIcon={<AddIcon color="black" />}>
      Agregar
    </Button>
  );

  return (
    <Layout>
      <div className="listado-productos">
        <Title>Productos Elaborados</Title>
        <div className="search">
          {btnAgregar}
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
                <Th>Unidades</Th>
                <Th>Último Cambio</Th>
              </Tr>
            </Thead>
            <Tbody>{lineaDeProducto}</Tbody>
          </Table>
        </TableContainer>
        <Button variant="secondary" marginTop="20px">
          Imprimir Agotados
        </Button>
      </div>
    </Layout>
  );
}
