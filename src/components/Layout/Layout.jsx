import React from "react";
import Header from "../Header/Header";

function Layout({ area, children }) {
  return (
    <>
      <Header area={area} />
      <main
        style={{ minHeight: "calc(100vh - 80px - 65px)" }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
