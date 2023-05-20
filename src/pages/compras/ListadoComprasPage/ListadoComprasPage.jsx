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
  Checkbox,
} from "@chakra-ui/react";
import Button from "../../../components/Button/Button";
import { React } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "../../../components/DateInput/DateInput";
import Title from "../../../components/Title/Title";
import { findAllCompras } from "../../../data/compras";

function LineaCompra({ id, units, product, price }) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>{units}</Td>
      <Td>{product}</Td>
      <Td>{price}</Td>
      <Td>{price * units}</Td>
      <Td>
        <Checkbox />
      </Td>
    </Tr>
  );
}

export default function ListadoComprasPage() {
  const compras = findAllCompras();
  const lineasCompras = compras.map((compras) => {
    return <LineaCompra {...compras} />;
  });

  return (
    <Layout>
      <div className="listado-compras">
        <Title>Compras</Title>
        <Button>Todos</Button>
        <div className="search">
          <div>
            Inicio <DateInput></DateInput>
          </div>
          <div>
            Fin <DateInput></DateInput>
          </div>
          <Input name="search" label="" placeholder="Buscar..." width="50%" />
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>FECHA</Th>
                <Th>PRODUCTO</Th>
                <Th>CANTIDAD</Th>
                <Th>TOTAL</Th>
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
