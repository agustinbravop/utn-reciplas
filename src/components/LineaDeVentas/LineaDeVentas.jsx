import { Tr, Td,Checkbox } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaMateriaPrima({
  id,
  nombre,
  fecha,
  producto,
  unidades,
  tipo,
  total,
  isChecked,
  onItemChecked,
}) {
  return (
    <Tr key={id}>
      <Td>
        <Checkbox isChecked={isChecked} onChange={() => onItemChecked(id)} background={"green"} />
      </Td>
      <Td>{nombre}</Td>
      <Td>{fecha}</Td>
      <Td>{producto}</Td>
      <Td>{unidades}</Td>
      <Td>{tipo}</Td>
      <Td>{total} </Td>
    </Tr>
  );
}

