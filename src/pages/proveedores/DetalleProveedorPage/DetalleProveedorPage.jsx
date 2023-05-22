import React from "react";
import { findProveedorByID } from "../../../data/proveedores";
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

export default function DetalleProveedorPage() {
  const { id } = useParams("id");
  const m = findProveedorByID(parseInt(id));
  return (
    <Layout area="ventas">
      <div className="cuerpo">
        <Card>
          <CardHeader>
            <Heading size="md">Proveedor: {m.name}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="3">
              <Box>
                <Heading size="xs">Correo</Heading>
                <EditableText defaultValue={m.mail} />
              </Box>
              <Box>
                <Heading size="xs">Celular</Heading>
                <EditableText defaultValue={m.cel} />
              </Box>
              <Box>
                <Heading size="xs">Tipo</Heading>
                <EditableText defaultValue={m.tipo} />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
