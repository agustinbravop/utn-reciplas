import React from "react";
import { findCompraByID } from "../../../data/compras";
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

export default function DetalleCompraPage() {
  const { id } = useParams("id");
  const m = findCompraByID(parseInt(id));
  return (
    <Layout>
      <div className="cuerpo">
        <Card>
          <CardHeader>
            <Heading size="md">{m.nombre}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="3">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Sector
                </Heading>
                <Text pt="2" fontSize="sm">
                  {m.sector}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Celular
                </Heading>
                <Text pt="2" fontSize="sm">
                  {m.telefono}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
