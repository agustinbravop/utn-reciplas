import { Tr, Td } from "@chakra-ui/react";

export default function LineaCliente({
  id,
  name,
  mail,
  cel,
  debt
}) {
  return (
    <Tr key={id}>
      <Td>{name}</Td>
      <Td>{mail}</Td>
      <Td>{cel}</Td>
      <Td>{debt}</Td>
    </Tr>
  );
}
