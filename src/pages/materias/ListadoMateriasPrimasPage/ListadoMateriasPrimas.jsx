import Input from "../../../components/Input/Input";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
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
import Button from "../../../components/Button/Button";
import { React } from "react";
import { findAllMateriasPrimas } from "../../../data/materias";
import Title from "../../../components/Title/Title";

function LineaMateriaPrima({
  id,
  descripcion,
  calidad,
  deposito,
  cantidad,
  ultimoCambio,
}) {
  const navigate = useNavigate();
  const url = useLocation();
  const area = url.pathname.split("/")[1];
  const edit = ["prod", "compras"].includes(area) ? <EditIcon></EditIcon> : "";
  return (
    <Tr
      onClick={() => navigate(`${id}`)}
      key={id}
      className={cantidad === 0.0 && "linea-agotado"}
    >
      <Td>{id}</Td>
      <Td>{descripcion}</Td>
      <Td>{calidad}</Td>
      <Td>{cantidad} kg</Td>
      <Td>{deposito}</Td>
      <Td>{ultimoCambio}</Td>
      <Td>{edit}</Td>
    </Tr>
  );
}

export default function ListadoMateriasPrimasPage() {
  const materiasPrimas = findAllMateriasPrimas();
  const lineasDeMateriaPrima = materiasPrimas.map((materia) => {
    return <LineaMateriaPrima {...materia} />;
  });

  const url = useLocation();
  const area = url.pathname.split("/")[1];
  const btnAgregar = area === "admin" && (
    <Button to="crear" rightIcon={<AddIcon color="black" />}>
      Agregar
    </Button>
  );

  return (
    <Layout>
      <div className="listado-materias">
        <Title>Materias Primas</Title>
        <div className="search">
          {btnAgregar}
          <Input name="search" label="" placeholder="Buscar..." width="50%" />
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Descripción</Th>
                <Th>Calidad</Th>
                <Th>Cantidad</Th>
                <Th>Depósito</Th>
                <Th>Último Cambio</Th>
              </Tr>
            </Thead>
            <Tbody>{lineasDeMateriaPrima}</Tbody>
          </Table>
        </TableContainer>
        <Button variant="secondary" marginTop="20px">
          Imprimir Agotadas
        </Button>
      </div>
    </Layout>
  );
}
