import { Tr, Td,Checkbox } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaDeClientes({
  id,
  nombre,
  correo,
  telefono,
  deuda,
  perfil,
  isChecked,
  onItemChecked,
}) {
  return (
    <Tr key={id}>
      <Td>
        <Checkbox isChecked={isChecked} onChange={() => onItemChecked(id)} background={"green"} />
      </Td>
      <Td>{nombre}</Td>
      <Td>{correo}</Td>
      <Td>{telefono}</Td>
      <Td>{deuda}</Td>
      <Td>{ perfil} </Td>
    </Tr>
  );
}
