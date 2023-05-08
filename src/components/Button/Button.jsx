import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import "./Button.css";

function Button({ type, href, children }) {
  if (type === "secondary") {
    return (
      <ChakraButton variant="outlined" href={href} className="btn-secundario">
        {children}
      </ChakraButton>
    );
  }

  return (
    <ChakraButton variant="contained" href={href} className="btn-primario">
      {children}
    </ChakraButton>
  );
}

export default Button;
