import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function ButtonContent({ to, children }) {
  if (to) {
    return <Link to={to}>{children}</Link>;
  } else {
    return children;
  }
}

function Button({ variant, to, size, children, ...props }) {
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
      <ButtonContent to={to}>
        <ChakraButton
          variant="outlined"
          className={`btn-secundario`}
          {...props}
          style={sizeStyles}
        >
          {children}
        </ChakraButton>
      </ButtonContent>
    );
  }

  if (variant === "disabled") {
    return (
      <ButtonContent>
        <ChakraButton
          variant="solid"
          className={`btn-deshabilitado`}
          {...props}
          style={sizeStyles}
        >
          {children}
        </ChakraButton>
      </ButtonContent>
    );
  }

  if (variant === "danger") {
    return (
      <ButtonContent>
        <ChakraButton
          variant="contained"
          className={`btn-peligro`}
          {...props}
          style={sizeStyles}
        >
          {children}
        </ChakraButton>
      </ButtonContent>
    );
  }

  return (
    <ButtonContent to={to}>
      <ChakraButton
        variant="contained"
        className={`btn-primario`}
        style={sizeStyles}
        {...props}
      >
        {children}
      </ChakraButton>
    </ButtonContent>
  );
}

export default Button;
