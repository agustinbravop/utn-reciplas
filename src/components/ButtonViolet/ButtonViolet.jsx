import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import "./ButtonViolet.css";
import { Link } from "react-router-dom";

function ButtonContent({ href, children }) {
  if (href) {
    return <Link to={href}>{children}</Link>
  } else {
    return children
  }
}


function Button({ variant, href, children, ...props }) {

  return (
    <ChakraButton variant="contained" className="grande" {...props}>
        <ButtonContent href={href}>{children}</ButtonContent>
    </ChakraButton>
  );
}

export default Button;
