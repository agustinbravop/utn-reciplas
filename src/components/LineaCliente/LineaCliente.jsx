import { Tr, Td } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom"; 

export default function LineaCliente({ id, name, mail, cel, debt }) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>
        <Link to={`${id}`}>{name}</Link>
      </Td>
      <Td>{mail}</Td>
      <Td>{cel}</Td>
      <Td>{debt}</Td>
      <Td>
        <button>
          {" "}
          <EditIcon></EditIcon>{" "}
        </button>
      </Td>
    </Tr>
  );
}
