import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./pages/LogInPage/LogInPage";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import ProdHomePage from "./pages/ProdHomePage/ProdHomePage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import ComprasHomePage from "./pages/ComprasHomePage/ComprasHomePage";
import VentasHomePage from "./pages/VentasHomePage/VentasHomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ListadoVentasPage from "./pages/ListadoVentasPage/ListadoVentasPage";
import ListadoClientesPage from "./pages/ListadoClientesPage/ListadoClientesPage"
import CrearNuevaMateriaPrimaPage from "./pages/CrearNuevaMateriaPrimaPage/CrearNuevaMateriaPrimaPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInPage />,
  },
  {
    path: "prod",
    element: <ProdHomePage />,
  },
  {
    path: "compras",
    element: <ComprasHomePage />,
  },
  {
    path: "ventas",
    element: <VentasHomePage />,
  },
  {
    path: "admin",
    element: <AdminHomePage />,
  },
  {
    path: "admin/ventas",
    element: <ListadoVentasPage />,
  },
  {
    path: "ventas/clientes",
    element: <ListadoClientesPage />
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "prod/ListaMateriasPrimas",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "prod/ListaMateriasPrimas/Crear",
    element: <CrearNuevaMateriaPrimaPage />,
  }
]);

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
