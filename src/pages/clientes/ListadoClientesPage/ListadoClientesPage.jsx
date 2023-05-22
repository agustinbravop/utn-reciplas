import Layout from "../../../components/Layout/Layout";
import "./ListadoClientesPage.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
  Checkbox,
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {
  findAllClientes,
  findAllClientesDeudores,
} from "../../../data/clientes";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [soloDeudores, setSoloDeudores] = useState(false);
  const clientes = soloDeudores ? findAllClientesDeudores() : findAllClientes();

  const listadoClientes = clientes.map((c) => {
    return <LineaCliente {...c} key={c.id} />;
  });
  const onFilterChange = (e) => {
    setSoloDeudores(e.target.checked);
  };

  return (
    <Layout>
      <div className="ClienteLista">
        <h1 className="titulo">Listado de Clientes</h1>
        <div className="search">
          <Button href="crear" rightIcon={<AddIcon color="black" />}>
            Agregar
          </Button>
          <Input name="search" label="" placeholder="Buscar..." width="50%" />
          <Checkbox
            width="250px"
            onChange={onFilterChange}
          >
            ¿Sólo Deudores?
          </Checkbox>
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>ID</Th>
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
