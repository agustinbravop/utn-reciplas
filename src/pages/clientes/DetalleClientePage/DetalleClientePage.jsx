import React from "react";
import { findClienteByID } from "../../../data/clientes";
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

export default function DetalleClientePage() {
  const { id } = useParams("id");
  const m = findClienteByID(parseInt(id));

  return (
    <Layout>
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
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Fecha de Registro
                </Heading>
                <Text pt="2" fontSize="sm">
                  {m.regDate}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Deuda Actual
                </Heading>
                <Text pt="2" fontSize="sm">
                  {m.debt}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <h2>Historial de Compras</h2>
        <h4>10/05/23 | 5 | Mueble | $6700</h4>
      </div>
    </Layout>
  );
}
