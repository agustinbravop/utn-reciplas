import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import "./ListadoComprasPage.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
} from "@chakra-ui/react";
import Button from "../../../components/Button/Button";
import { React } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Title from "../../../components/Title/Title";
import { findAllCompras } from "../../../data/compras";
import { findProveedorByID } from "../../../data/proveedores";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";

function LineaCompra({ id, idProveedor, materias, fecha, estado }) {
  console.log(id, idProveedor, materias);
  const proveedor = findProveedorByID(idProveedor);
  const precio = materias.reduce((acum, m) => acum + m.precio, 0);
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>
        <Link to={`${id}`}>
          {proveedor.name}
        </Link>
      </Td>
      <Td>$ {precio}</Td>
      <Td>{fecha}</Td>
      <Td>{estado}</Td>
    </Tr>
  );
}

export default function ListadoComprasPage() {
  const compras = findAllCompras();
  const lineasCompras = compras.map((compra) => {
    return <LineaCompra {...compra} />;
  });

  return (
    <Layout>
      <div className="listado-compras">
        <Title>Compras</Title>
        <Button variant="disabled" rightIcon={<AddIcon color="grey" />}>
          Crear Nueva
        </Button>
        <div className="search-date">
          <div>
            Desde:
            <input type="date" />
          </div>
          <div>
            Hasta:
            <input type="date" />
          </div>
          <Input name="search" placeholder="Buscar..." width="50%" />
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>PROVEEDOR</Th>
                <Th>PRECIO</Th>
                <Th>FECHA</Th>
                <Th>ESTADO</Th>
              </Tr>
            </Thead>
            <Tbody>{lineasCompras}</Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
    </Layout>
  );
}
