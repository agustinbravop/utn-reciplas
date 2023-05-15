import { Tr, Td, Checkbox } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaMateriaPrima({
  id,
  fecha,
  producto,
  cantidad,
  total,
}) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>{fecha}</Td>
      <Td>{producto}</Td>
      <Td>{cantidad}</Td>
      <Td>{total}</Td>
      <Td>
        <Checkbox />
      </Td>
    </Tr>
  );
}
