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
                <Heading size="xs">Sector</Heading>
                <EditableText defaultValue={empl.sector} />
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
