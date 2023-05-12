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
import ListadoClientesPage from "./pages/ListadoClientesPage/ListadoClientesPage";
import CrearNuevaMateriaPrimaPage from "./pages/CrearNuevaMateriaPrimaPage/CrearNuevaMateriaPrimaPage";
import ListadoMateriasPrimasPage from "./pages/ListadoMateriasPrimasPage/ListadoMateriasPrimas";
import DetalleMateriaPage from "./pages/DetalleMateriaPage/DetalleMateriaPage";
import ListadoPedidosPendientesPage from "./pages/ListadoPedidosPendientesPage/ListadoPedidosPendientesPage";
import ListadoProductosPage from "./pages/ListadoProductosPage/ListadoProductosPage";

import ListadoDeEmpleados from "./pages/ListadoDeEmpleados/ListadoDeEmpleados";
import ListadoDeProveedores from "./pages/ListadoDeProveedores/ListadoDeProveedores";
import ListadoDeClientes from "./pages/ListadoDeClientes/ListadoDeClientes";

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
    path: "admin/empleados",
    element: <ListadoDeEmpleados />,
  },
  {
    path: "admin/reporteProveedores",
    element: <ListadoDeProveedores />,
  },
  {
    path: "admin/reporteClientes",
    element: <ListadoDeClientes />,
  },
  {
    path: "ventas/clientes",
    element: <ListadoClientesPage />,
  },
  {
    path: "ventas/productos",
    element: <ListadoProductosPage />,
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
    path: "prod/productos",
    element: <ListadoProductosPage />,
  },
  {
    path: "ventas/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  /*
  {
    path: "prod/materias/detalle/1",
    element: <DetalleMateriaPage id={1} />
  },
  */
  {
    path: "prod/pendientes",
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
