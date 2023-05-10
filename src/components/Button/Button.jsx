import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import "./Button.css";

function Button({ variant, href, ...props }) {
  if (variant === "secondary") {
    return (
      <ChakraButton variant="outlined" className="btn-secundario" {...props} />
    );
  }

  return (
    <ChakraButton variant="contained" className="btn-primario" {...props} />
  );
}

export default Button;
