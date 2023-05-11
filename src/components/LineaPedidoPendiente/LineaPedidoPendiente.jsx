import { Tr, Td } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaPedidoPendiente({
  id,
  descripcion,
  calidad,
  deposito,
  cantidad,
  ultimoCambio,
}) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>{descripcion}</Td>
      <Td>{calidad}</Td>
      <Td>{deposito}</Td>
      <Td>{cantidad} kg</Td>
      <Td>{ultimoCambio}</Td>
      <Td><EditIcon></EditIcon></Td>
    </Tr>
  );
}
