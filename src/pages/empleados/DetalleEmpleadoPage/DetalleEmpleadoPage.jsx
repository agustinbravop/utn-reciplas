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
  StackDivider,
  Text,
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
            <Heading size="2xl">Empleado</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="3">
              <Box>
                <Heading size="xs">Nombre</Heading>
                <EditableText defaultValue={empl.nombre} />
              </Box>
              <Box>
                <Heading size="xs">Correo</Heading>
                <EditableText defaultValue={empl.correo} />
              </Box>
              <Box>
                <Heading size="xs">Contraseña</Heading>
                <EditableText defaultValue={empl.password} />
              </Box>
              <Box>
                <Heading size="xs">Sector</Heading>
                <Text>{empl.sector}</Text>
              </Box>
              <Box>
                <Heading size="xs">Celular</Heading>
                <EditableText defaultValue={empl.telefono} />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
