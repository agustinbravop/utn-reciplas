import { Tr, Td,Checkbox } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaMateriaPrima({
  nombre,
  correo,
  telefono,
  deuda,
  perfil
}) {
  return (
    <Tr key={nombre}>
      <Td>{nombre}</Td>
      <Td>{correo}</Td>
      <Td>{telefono}</Td>
      <Td>{deuda}</Td>
      <Td>{ perfil} </Td>
      <Td>
        <Checkbox />
      </Td>
    </Tr>
  );
}
