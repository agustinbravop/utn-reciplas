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
  Text,
  StackDivider,
} from "@chakra-ui/react";

export default function DetalleProveedorPage() {
  const { id } = useParams("id");
  const m = findProveedorByID(parseInt(id));
  return (
    <Layout area="ventas">
      <div className="cuerpo">
      <Card>
          <CardHeader>
            <Heading size="md">{m.name}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="3">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Correo
                </Heading>
                <Text pt="2" fontSize="sm">
                  {m.mail}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Celular
                </Heading>
                <Text pt="2" fontSize="sm">
                  {m.cel}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Tipo
                </Heading>
                <Text pt="2" fontSize="sm">
                  {m.tipo}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
