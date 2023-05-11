import Layout from "../../components/Layout/Layout";
import LineaCliente from "../../components/LineaCliente/LineaCliente";
import "./ListadoClientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const clientes = [
  {
    id: 1,
    name: "Jose Lopez",
    mail: "joselop@gmail.com",
    cel: "123456789",
    debt: 154.89,
  },
  {
    id: 2,
    name: "Esteban Ramirez",
    mail: "estRam@gmail.com",
    cel: "987654321",
    debt: 2894.5,
  },
  {
    id: 3,
    name: "Maria Paz Gonzales",
    mail: "marpgonza@gmail.com",
    cel: "456387432",
    debt: 1532,
  },
];

const ListadoClientes = clientes.map((c) => {
  return(
    <LineaCliente id={c.id} name={c.name} mail={c.mail} cel={c.cel} debt={c.debt} />
  );
});

export default function ListadoClientesPage() {
  return (
    <Layout area="ventas">
      <div className="ClienteLista">
        <h1 className="titulo">Listado de Clientes</h1>
        <div className="search">
          <Button rightIcon={<AddIcon color="black" />}>
            Agregar
          </Button>
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
                <Th>Nombre</Th>
                <Th>Correo</Th>
                <Th>Telefono</Th>
                <Th>Deuda</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ListadoClientes}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
