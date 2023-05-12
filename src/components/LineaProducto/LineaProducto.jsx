import { Tr, Td } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import {useLocation} from 'react-router-dom'

export default function LineaProducto({
  id,
  descripcion,
  linea,
  deposito,
  cantidad,
  ultimoCambio,
}) {
  const url = useLocation();
  const edit =
  url.pathname === "/prod/productos" ? (
      <EditIcon></EditIcon>
    ) : (
      ""
    );

  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>{descripcion}</Td>
      <Td>{linea}</Td>
      <Td>{deposito}</Td>
      <Td>{cantidad} kg</Td>
      <Td>{ultimoCambio}</Td>
      <Td>
        {edit}
      </Td>
    </Tr>
  );
}
