import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router";

function NotFoundPage() {
  const navigate = useNavigate();
  navigate("/404");

  return (
    <Layout>
      <Title>404</Title>
    </Layout>
  );
}

export default NotFoundPage;
