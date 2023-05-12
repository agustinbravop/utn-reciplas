import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import "./Input.css";
import React from "react";

function Input({ name, label, placeholder, type = "text", ...props }) {
  return (
    <FormControl className="input-container">
      <FormLabel className="input-label">{label}</FormLabel>
      <ChakraInput
        placeholder={placeholder}
        size="md"
        id={name}
        className="input"
        type={type}
        {...props}
      />
    </FormControl>
  );
}

export default Input;
