import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import "../ListadoEmpleadosPage/ListadoEmpleadosPage.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Button from "../../../components/Button/Button";
import { React } from "react";
import { findAllEmpleados } from "../../../data/empleados";
import { useNavigate } from "react-router-dom";

function LineaEmpleado({ id, nombre, sector, telefono, perfil }) {
  const navigate = useNavigate();
  return (
    <Tr key={id} onClick={() => navigate(`${id}`)}>
      <Td>{id}</Td>
      <Td>{nombre}</Td>
      <Td>{sector}</Td>
      <Td>{telefono}</Td>
      <Td>{perfil}</Td>
    </Tr>
  );
}

export default function ListadoEmpleadosPage() {
  const empleados = findAllEmpleados();
  const lineasEmpleados = empleados.map((e) => {
    return <LineaEmpleado {...e} />;
  });

  return (
    <Layout>
      <div className="listado-empleados">
        <h1 className="titulo">Empleados</h1>
        <div className="search">
          <Button to="crear" rightIcon={<AddIcon color="black" />}>
            Agregar
          </Button>
          <Input name="search" label="" placeholder="Buscar..." width="50%" />
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>NUMERO</Th>
                <Th>NOMBRE</Th>
                <Th>SECTOR</Th>
                <Th>TELEFONO</Th>
              </Tr>
            </Thead>
            <Tbody>{lineasEmpleados}</Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
