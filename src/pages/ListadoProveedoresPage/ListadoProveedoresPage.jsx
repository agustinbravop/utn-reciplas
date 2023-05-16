import Layout from "../../components/Layout/Layout";
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
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { findAllProveedores } from "../../data/proveedores";
import { Link } from "react-router-dom";

function LineaProveedor({ id, name, mail, cel, tipo }) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>
        <Link to={`${id}`} className="link">{name}</Link>
      </Td>
      <Td>{mail}</Td>
      <Td>{cel}</Td>
      <Td>{tipo}</Td>
      <Td>
        <button>
          {" "}
          <EditIcon></EditIcon>{" "}
        </button>
      </Td>
    </Tr>
  );
}

export default function ListadoProveedoresPage() {
  const proveedores = findAllProveedores();
  const listadoProveedores = proveedores.map((p) => {
    return <LineaProveedor {...p} />;
  });

  return (
    <Layout area="ventas">
      <div className="ProveedorLista">
        <h1 className="titulo">Listado de Proveedores</h1>
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
