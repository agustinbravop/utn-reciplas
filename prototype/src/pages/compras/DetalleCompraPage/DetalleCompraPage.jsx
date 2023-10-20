import React from "react";
import { findCompraByID } from "../../../data/compras";
import { useNavigate, useParams } from "react-router";
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
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import { findProveedorByID } from "../../../data/proveedores";
import { findMateriaPrimaByID } from "../../../data/materias";
import Title from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./DetalleCompraPage.css";
import { BiLinkExternal } from "react-icons/bi";

function FormPago({ precio }) {
  return (
    <div className="pago-compra-form">
      <Input
        name="precio"
        label="Precio Total"
        value={precio}
        isReadOnly
      ></Input>
    </div>
  );
}

function LineaMateriaComprada({ idMateria, precio, cantidad }) {
  const navigate = useNavigate();
  const descripcion = findMateriaPrimaByID(idMateria).descripcion;

  return (
    <Tr
      onClick={() =>
        navigate(`../../materias/${idMateria}`, {
          relative: "path",
        })
      }
    >
      <Td>{idMateria}</Td>
      <Td>{descripcion}</Td>
      <Td>{cantidad}</Td>
      <Td>{precio} $</Td>
    </Tr>
  );
}

function MateriasCompradas({ materias }) {
  return (
    <Table
      variant="striped"
      colorScheme="gray"
      className="listado-materias-compradas"
      size="sm"
    >
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Nombre</Th>
          <Th>Cantidad (kg)</Th>
          <Th>Precio Total</Th>
        </Tr>
      </Thead>
      <Tbody>
        {materias.map((m) => (
          <LineaMateriaComprada {...m} />
        ))}
      </Tbody>
    </Table>
  );
}

function FormPagoModal({ precio, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} margin="15px">Pagar</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pago de la compra N° {id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormPago precio={precio} />
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button variant="secondary">Cancelar</Button>
            <Button marginLeft="10px">Pagar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function DetalleCompraPage() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const c = findCompraByID(parseInt(id));
  const proveedor = findProveedorByID(c.idProveedor);
  const precio = c.materias.reduce((acum, m) => acum + m.precio, 0);

  return (
    <Layout>
      <div className="cuerpo">
        <Title>Compra N° {c.id}</Title>
        <h2>
          <b>ID:</b> {c.id}
        </h2>
        <h2>
          <b>Fecha de compra:</b> {c.fecha}
        </h2>
        <h2>
          <b>Estado actual:</b> {c.estado}
        </h2>
        <h2>
          <b>Costo total:</b> {precio}
        </h2>

        {c.estado !== "Recibida y pagada" && (
          <FormPagoModal precio={precio} id={id} />
        )}

        <Card>
          <CardHeader>
            <Heading size="md" className="atributo-link">
              Proveedor: {proveedor.name}
              <BiLinkExternal
                onClick={() =>
                  navigate(`../../proveedores/${proveedor.id}`, {
                    relative: "path",
                  })
                }
                color="blue"
                display="inline"
              />
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="3">
              <Box>
                <Heading size="xs">Correo</Heading>
                <Text pt="2">{proveedor.mail}</Text>
              </Box>
              <Box>
                <Heading size="xs">Celular</Heading>
                <Text pt="2">{proveedor.cel}</Text>
              </Box>
              <Box>
                <Heading size="xs">Tipo</Heading>
                <Text pt="2">{proveedor.tipo}</Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Title variant="subtitle">Materias Compradas:</Title>
        <MateriasCompradas materias={c.materias} />
      </div>
    </Layout>
  );
}
