import { Tr, Td } from "@chakra-ui/react";

export default function LineaMateriaPrima({
  id,
  descripcion,
  calidad,
  deposito,
  cantidad,
  ultimoCambio,
}) {
  return (
    <Tr key={id}>
      <Td>{descripcion}</Td>
      <Td>{calidad}</Td>
      <Td>{deposito}</Td>
      <Td>{cantidad} kg</Td>
      <Td>{ultimoCambio}</Td>
    </Tr>
  );
}
