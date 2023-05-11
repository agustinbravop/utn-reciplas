import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function ButtonContent({ href, children }) {
  if (href) {
    return <Link to={href}>{children}</Link>
  } else {
    return children
  }
}

function Button({ variant, href, children, ...props }) {

  if (variant === "secondary") {
    return (
      <ChakraButton variant="outlined" className="btn-secundario" {...props}>
        <ButtonContent href={href}>{children}</ButtonContent>
      </ChakraButton>
    );
  }

  return (
    <ChakraButton variant="contained" className="btn-primario" {...props}>
        <ButtonContent href={href}>{children}</ButtonContent>
    </ChakraButton>
  );
}

export default Button;
