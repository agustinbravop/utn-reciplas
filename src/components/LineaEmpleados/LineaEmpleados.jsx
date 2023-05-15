import { Tr, Td } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaMateriaPrima({
  id,
  nombre,
  sector,
  telefono,
  perfil
}) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>{nombre}</Td>
      <Td>{sector}</Td>
      <Td>{telefono}</Td>
      <Td>{ perfil} </Td>
    </Tr>
  );
}
