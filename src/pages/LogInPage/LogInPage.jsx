import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "./LogInPage.css";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = (e) => {
    if (email.split("@")[0] === "produccion") {
      
    }
  }

  return (
    <Layout>
      <Title text="Iniciar sesión" />
      <div className="form-iniciar-sesion">
        <Input
          placeholder="Correo"
          label="Correo"
          name="email"
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
        <Button onClick={handleClick}>Ingresar</Button>
      </div>
    </Layout>
  );
}

export default LogInPage;
