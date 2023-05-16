import React from "react";
import Header from "./Header/Header";
import { useLocation } from "react-router";

function Layout({ children }) {
  const url = useLocation();
  let area = url.pathname.split("/")[1];
  if (!["admin", "prod", "ventas", "compras"].includes(area)) {
    area = null;
  }

  return (
    <>
      <Header area={area} />
      <main style={{ minHeight: "calc(100vh - 80px - 65px)" }}>{children}</main>
    </>
  );
}

export default Layout;
