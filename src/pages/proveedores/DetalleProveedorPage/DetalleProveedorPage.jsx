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
import Button from "../../../components/Button/Button";

export default function DetalleProveedorPage() {
  const { id } = useParams("id");
  const p = findProveedorByID(parseInt(id));
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
        <Button variant="danger" marginTop="40px">
          Eliminar proveedor
        </Button>
      </div>
    </Layout>
  );
}
