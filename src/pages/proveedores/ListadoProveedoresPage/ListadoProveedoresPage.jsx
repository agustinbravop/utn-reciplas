import Layout from "../../../components/Layout/Layout";
import "./ListadoProveedoresPage.css";
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
import Input from "../../../components/Input/Input";
import { findAllProveedores } from "../../../data/proveedores";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../../components/Title/Title";

function LineaProveedor({ id, name, mail, cel, tipo }) {
  const navigate = useNavigate();
  return (
    <Tr key={id} onClick={() => navigate(`${id}`)}>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{mail}</Td>
      <Td>{cel}</Td>
      <Td>{tipo}</Td>
      <Td>
        <EditIcon></EditIcon>
      </Td>
    </Tr>
  );
}

export default function ListadoProveedoresPage() {
  const proveedores = findAllProveedores();
  const listadoProveedores = proveedores.map((p) => {
    return <LineaProveedor {...p} />;
  });
  const location = useLocation();
  const area = location.pathname.split("/")[1];
  const buttonAgregar = ["admin", "ventas"].includes(area) && (
    <Button to="crear" rightIcon={<AddIcon color="black" />}>
      Agregar
    </Button>
  );
  return (
    <Layout>
      <div className="listado-proveedores">
        <Title>Listado de Proveedores</Title>
        <div className="search">
          {buttonAgregar}
          <Input name="search" label="" placeholder="Buscar..." width="50%" />
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th> Id </Th>
                <Th>Nombre</Th>
                <Th>Correo</Th>
                <Th>Telefono</Th>
                <Th>Tipo</Th>
              </Tr>
            </Thead>
            <Tbody>{listadoProveedores}</Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
