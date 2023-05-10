import { Tr, Td } from "@chakra-ui/react";

export default function LineaVenta({
  id,
  client,
  product,
  units,
  type,
  unitCost
}) {
  return (
    <Tr key={id}>
      <Td>{client}</Td>
      <Td>{product}</Td>
      <Td>{type}</Td>
      <Td>{units}</Td>
      <Td>$ {unitCost}</Td>
      <Td>$ {unitCost * units}</Td>
    </Tr>
  );
}
