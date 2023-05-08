import React from "react";
import Header from "../Header/Header";
import { useLocation } from "react-router";

function Layout({ children }) {
  const loc = useLocation();

  return (
    <>
      <Header page={loc.pathname} />
      <main
        style={{ minHeight: "calc(100vh - 80px - 65px)" }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
