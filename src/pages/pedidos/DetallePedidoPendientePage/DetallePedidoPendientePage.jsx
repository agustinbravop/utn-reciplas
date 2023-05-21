import React from "react";
import Title from "../../../components/Title/Title";
import { findPedidoPendienteByID } from "../../../data/pedidos";
import {findProductoByID} from '../../../data/productos';
import {findClienteByID} from '../../../data/clientes';
import { useParams } from "react-router";
import Layout from "../../../components/Layout/Layout";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Button from "../../../components/Button/Button";
import {
  Thead,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";


function FormEstado() {
  const options = ["En proceso", "Terminado",  "En entrega"];
  return (
    <div className="PedidoPendiente-movimiento-form">
      <Title>ESTADO</Title>
      <RadioGroup options={options} />
      <Button>Guardar Estado</Button>
    </div>
  );
}

function LineaProducto({id, descripcion, linea, cantidad}) {
    return (
        <Tr key={id}>
          <Td>{id}</Td>
          <Td>{descripcion}</Td>
          <Td>{linea}</Td>
          <Td>{cantidad}</Td>
        </Tr>
    );
}

function DetallePedidoPendientePage() {
  const { id } = useParams("id");
  //Obtengo el pedido
  const m = findPedidoPendienteByID(parseInt(id));

  //obtengo el cliente del pedido
  const c = findClienteByID(m.idClient);

  //Obtengo las lineas del pedido
  const lineasPedido = (m.content).map( (e) => {

    //obtengo el producto
    const producto = findProductoByID(e.idProd);

    return <LineaProducto 
      id={producto.id } 
      descripcion={producto.descripcion }
      linea={producto.linea }
      cantidad={e.amount }
      />
} );

  return (
    <Layout area='prod' >
      <div className="cuerpo">
        <Title>Pedido de {c.name} </Title>
        <h2>
          <b>ID:</b> {c.id}
        </h2>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Producto</Th>
              <Th>Tipo</Th>
              <Th>Cantidad</Th>
            </Tr>
          </Thead>
          <Tbody>
            {lineasPedido}
          </Tbody>
          </Table>
        <FormEstado />
      </div>
    </Layout>
  );
}

export default DetallePedidoPendientePage;
