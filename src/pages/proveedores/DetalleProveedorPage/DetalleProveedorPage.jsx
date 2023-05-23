import React from "react";
import { findProveedorByID } from "../../../data/proveedores";
import { useNavigate, useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Stack,
  StackDivider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import EditableText from "../../../components/EditableText/EditableText";
import Button from "../../../components/Button/Button";
import { findAllComprasByProveedorID } from "../../../data/compras";
import { findMateriaPrimaByID } from "../../../data/materias";
import Title from "../../../components/Title/Title";

function LineaCompra({ id, fecha, materias }) {
  const navigate = useNavigate();
  const precioTotal = materias.reduce((acum, m) => acum + m.precio, 0);
  const productos = materias
    .map((linea) => findMateriaPrimaByID(linea.idMateria))
    .map((m) => m.descripcion)
    .join(", ");

  return (
    <Tr
      onClick={() =>
        navigate(`../../compras/${id}`, {
          relative: "path",
        })
      }
      key={id}
    >
      <Td>{id}</Td>
      <Td>{fecha}</Td>
      <Td isNumeric>{precioTotal.toFixed(2)} $</Td>
      <Td inlineSize="350px">{productos}</Td>
    </Tr>
  );
}

function HistorialCompras({ compras }) {
  const lineasCompra = compras.map((c) => <LineaCompra {...c} />);
  return (
    <Table size="sm" className="historial-compras">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Fecha</Th>
          <Th isNumeric>Precio Total</Th>
          <Th>Productos</Th>
        </Tr>
      </Thead>
      <Tbody>{lineasCompra}</Tbody>
    </Table>
  );
}

export default function DetalleProveedorPage() {
  const { id } = useParams("id");
  const p = findProveedorByID(parseInt(id));
  const compras = findAllComprasByProveedorID(p.id);

  return (
    <Layout>
      <div className="cuerpo">
        <Card>
          <CardHeader>
            <Heading size="md">Proveedor: {p.name}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="3">
              <Box>
                <Heading size="xs">Correo</Heading>
                <EditableText defaultValue={p.mail} />
              </Box>
              <Box>
                <Heading size="xs">Celular</Heading>
                <EditableText defaultValue={p.cel} />
              </Box>
              <Box>
                <Heading size="xs">Tipo</Heading>
                <EditableText defaultValue={p.tipo} />
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Title variant="subtitle">Historial de Compras:</Title>
        <HistorialCompras compras={compras} />
        <Button variant="danger">Eliminar proveedor</Button>
      </div>
    </Layout>
  );
}
