import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "./LogInPage.css";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userType = email.split("@")[0];
    if (userType === "prod") {
      navigate("/prod");
    } else if (userType === "admin") {
      navigate("/admin");
    } else if (userType === "ventas") {
      navigate("/ventas");
    } else if (userType === "compras") {
      navigate("/compras");
    } else {
      setIsError(true);
    }
  };

  return (
    <Layout>
      <Title>Iniciar sesión</Title>
      <form className="form-iniciar-sesion">
        <Input
          placeholder="Correo"
          label="Correo"
          name="email"
          helper="Solo 'admin', 'prod', 'compras' o 'ventas'."
          value={email}
          borderColor={isError ? "red" : "lightGrey"}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Contraseña"
          label="Contraseña"
          name="password"
        ></Input>
        {isError && (
          <Text fontSize="sm" color="red">
            Correo inválido.
          </Text>
        )}
        <Button onClick={handleSubmit} type="submit">
          Ingresar
        </Button>
      </form>
    </Layout>
  );
}

export default LogInPage;
