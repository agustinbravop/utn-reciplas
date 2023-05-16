import Layout from "../../components/Layout/Layout";
import "./ListadoClientesPage.css";
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
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { findAllClientes } from "../../data/clientes";
import { Link } from "react-router-dom";

function LineaCliente({ id, name, mail, cel, debt }) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>
        <Link to={`${id}`} className="link">
          {name}
        </Link>
      </Td>
      <Td>{mail}</Td>
      <Td>{cel}</Td>
      <Td>{debt}</Td>
      <Td>
        <button>
          {" "}
          <EditIcon></EditIcon>{" "}
        </button>
      </Td>
    </Tr>
  );
}

export default function ListadoClientesPage() {
  const clientes = findAllClientes();
  const listadoClientes = clientes.map((c) => {
    return <LineaCliente {...c} />;
  });

  return (
    <Layout>
      <div className="ClienteLista">
        <h1 className="titulo">Listado de Clientes</h1>
        <div className="search">
          <Button href="alta" rightIcon={<AddIcon color="black" />}>
            Agregar
          </Button>
          <Input name="search" label="" placeholder="Buscar..." width="50%" />
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>Nombre</Th>
                <Th>Correo</Th>
                <Th>Telefono</Th>
                <Th>Deuda</Th>
              </Tr>
            </Thead>
            <Tbody>{listadoClientes}</Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
