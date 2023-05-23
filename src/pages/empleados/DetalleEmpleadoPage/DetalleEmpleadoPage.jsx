import React from "react";
import { findEmpleadoByID } from "../../../data/empleados";
import { useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Stack,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import EditableText from "../../../components/EditableText/EditableText";

export default function DetalleEmpleadoPage() {
  const { id } = useParams("id");
  const empl = findEmpleadoByID(parseInt(id));
  return (
    <Layout>
      <div className="cuerpo">
        <Card>
          <CardHeader>
            <Heading size="md">Empleado: {empl.nombre}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="3">
              <Box>
                <Heading size="xs">Sector</Heading>
                <EditableText defaultValue={empl.sector} />
              </Box>
              <Box>
                <Heading size="xs">Celular</Heading>
                <EditableText defaultValue={empl.telefono} />
              </Box>
              <Box>
                <Heading size="xs">Nombre y Apellido</Heading>
                <EditableText defaultValue={empl.nombre} />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
