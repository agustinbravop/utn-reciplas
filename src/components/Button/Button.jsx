import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import "./Button.css";

function Button({ type, href, ...props }) {
  if (type === "secondary") {
    return (
      <ChakraButton variant="outlined" className="btn-secundario" {...props} />
    );
  }

  return (
    <ChakraButton variant="contained" className="btn-primario" {...props} />
  );
}

export default Button;
