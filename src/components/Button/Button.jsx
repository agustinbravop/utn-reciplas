import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function ButtonContent({ href, children }) {
  if (href) {
    return <Link to={href}>{children}</Link>;
  } else {
    return children;
  }
}

function Button({ variant, href, size, children, ...props }) {
  const sizeStyles =
    size === "lg"
      ? {
          width: "280px",
          height: "128px",
          fontSize: "30px",
        }
      : {};
  if (variant === "secondary") {
    return (
      <ChakraButton
        variant="outlined"
        className={`btn-secundario`}
        {...props}
        style={sizeStyles}
      >
        <ButtonContent href={href}>{children}</ButtonContent>
      </ChakraButton>
    );
  }

  return (
    <ChakraButton
      variant="contained"
      className={`btn-primario`}
      style={sizeStyles}
      {...props}
    >
      <ButtonContent href={href}>{children}</ButtonContent>
    </ChakraButton>
  );
}

export default Button;
