import Input from "../../components/Input/Input";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import LineaMateriaPrima from "../../components/LineaMateriaPrima/LineaMateriaPrima";
import "./ListadoDeMaterias.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Button from "../../components/Button/Button";
import { React } from "react";
import { findAllMateriasPrimas } from "../../data/materias";

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
