import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaMateriaPrima from "../../components/LineaMateriaPrima/LineaMateriaPrima";
import "./ListadoMateriasPrimas.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer} from "@chakra-ui/react";
import Button from "../../components/Button/Button";
import {React} from "react";

const materiasPrimas = [
  {
    id: 1,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40"
  },
  {
    id: 2,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40"
  },
  {
    id: 3,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40"
  },
  {
    id: 4,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40"
  },
];

export default function ListadoMateriasPrimasPage() {
  const lineasDeMateriaPrima = materiasPrimas.map((nombre) => {
    return (
      <LineaMateriaPrima
        id={nombre.id}
        descripcion={nombre.descripcion}
        calidad={nombre.calidad}
        deposito={nombre.deposito}
        cantidad={nombre.cantidad}
        ultimoCambio={nombre.ultimoCambio}
      />
    );
  });

  return (
    <Layout area="prod">
      <div className="MateriasPrimas">
        <div classname="row">
          <h1 className="titulo">Materias Primas</h1>
          <Button>Crear Nueva +</Button>
        </div>
        <Input name="buscarMateria" label=" " placeholder="Buscar..."></Input>
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
            <Tbody>
              {lineasDeMateriaPrima}
            </Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
    </Layout>
  );
}
