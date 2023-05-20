import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "./LogInPage.css";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
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
      navigate("/404");
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
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Contraseña"
          label="Contraseña"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></Input>
        <Button onClick={handleSubmit} type="submit">
          Ingresar
        </Button>
      </form>
    </Layout>
  );
}

export default LogInPage;
