import Layout from "../../components/Layout/Layout";
import LineaCliente from "../../components/LineaCliente/LineaCliente";
import "./ListadoClientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { findAllClientes } from "../../data/clientes";

export default function ListadoClientesPage() {
  const clientes = findAllClientes();
  const listadoClientes = clientes.map((c) => {
    return <LineaCliente {...c} />;
  });

  return (
    <Layout area="ventas">
      <div className="ClienteLista">
        <h1 className="titulo">Listado de Clientes</h1>
        <div className="search">
          <Button rightIcon={<AddIcon color="black" />}>Agregar</Button>
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
