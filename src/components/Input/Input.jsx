import { Input as ChakraInput } from '@chakra-ui/react'
import "./Input.css";
import React from 'react'

function Input({ name, label, placeholder, ...props }) {
  return <div className="input-container">
    <label htmlFor={name} className="input-label">{label}</label>
    <ChakraInput placeholder={placeholder} size="md" id={name} className="input" {...props} />
  </div>
}

export default Input