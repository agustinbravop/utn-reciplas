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
import ListadoMateriasPrimasPage from './pages/ListadoMateriasPrimasPage/ListadoMateriasPrimas'
import DetalleMateriaPage from './pages/DetalleMateriaPage/DetalleMateriaPage'
import ListadoPedidosPendientesPage from "./pages/ListadoPedidosPendientesPage/ListadoPedidosPendientesPage";

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
    path: "prod/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "prod/materias/crear",
    element: <CrearNuevaMateriaPrimaPage />,
  },
  {
    path: "prod/materias/detalle",
    element: <DetalleMateriaPage />,
  },
  {
    path: "prod/pendiente",
    element: <ListadoPedidosPendientesPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
