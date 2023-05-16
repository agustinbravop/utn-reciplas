import Input from "../../components/Input/Input";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./ListadoMateriasPrimas.css";
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
import { React } from "react";
import { findAllMateriasPrimas } from "../../data/materias";

function LineaMateriaPrima({
  id,
  descripcion,
  calidad,
  deposito,
  cantidad,
  ultimoCambio,
}) {
  return (
    <Tr key={id} className={cantidad === 0.0 && "linea-agotado"}>
      <Td>{id}</Td>
      <Td>
        <Link to={`${id}`}>{descripcion}</Link>
      </Td>
      <Td>{calidad}</Td>
      <Td>{deposito}</Td>
      <Td>{cantidad} kg</Td>
      <Td>{ultimoCambio}</Td>
      <Td>
        <Link to={`/ventas/materias/${id}`}>
          <EditIcon></EditIcon>
        </Link>
      </Td>
    </Tr>
  );
}

export default function ListadoMateriasPrimasPage() {
  const materiasPrimas = findAllMateriasPrimas();
  const lineasDeMateriaPrima = materiasPrimas.map((materia) => {
    return <LineaMateriaPrima {...materia} />;
  });

  const url = useLocation();
  const area = url.pathname === "/ventas/materias" ? "ventas" : "prod";
  const mostrar =
    area === "prod" ? (
      <Button href="crear" rightIcon={<AddIcon color="black" />}>
        Agregar
      </Button>
    ) : (
      ""
    );

  return (
    <Layout>
      <div className="listado-materias">
        <h1 className="titulo">Materias Primas</h1>
        <div className="search">
          {mostrar}
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
                <Th>Cantidad</Th>
                <Th>Último Cambio</Th>
              </Tr>
            </Thead>
            <Tbody>{lineasDeMateriaPrima}</Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
    </Layout>
  );
}
