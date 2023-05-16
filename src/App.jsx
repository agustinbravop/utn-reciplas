import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./pages/LogInPage/LogInPage";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import ProdHomePage from "./pages/ProdHomePage/ProdHomePage";
import NuevoProductoPage from "./pages/NuevoProductoPage/NuevoProductoPage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import ComprasHomePage from "./pages/ComprasHomePage/ComprasHomePage";
import VentasHomePage from "./pages/VentasHomePage/VentasHomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ListadoVentasPage from "./pages/ListadoVentasPage/ListadoVentasPage";
import ListadoClientesPage from "./pages/ListadoClientesPage/ListadoClientesPage";
import ListadoProveedoresPage from "./pages/ListadoProveedoresPage/ListadoProveedoresPage";
import CrearNuevaMateriaPrimaPage from "./pages/NuevaMateriaPage/NuevaMateriaPage";
import ListadoMateriasPrimasPage from "./pages/ListadoMateriasPrimasPage/ListadoMateriasPrimas";
import DetalleMateriaPage from "./pages/DetalleMateriaPage/DetalleMateriaPage";
import DetalleProductoPage from "./pages/DetalleProductoPage/DetalleProductoPage";
import ListadoPedidosPendientesPage from "./pages/ListadoPedidosPendientesPage/ListadoPedidosPendientesPage";
import ListadoProductosPage from "./pages/ListadoProductosPage/ListadoProductosPage";
import DetalleCientePage from "./pages/DetalleClientePage/DetalleClientePage";
import NuevoClientePage from "./pages/NuevoClientePage/NuevoClientePage";
import NuevoProveedorPage from "./pages/NuevoProveedorPage/NuevoProveedorPage";
import DetalleProveedorPage from "./pages/DetalleProveedorPage/DetalleProveedorPage";
import ListadoDeEmpleados from "./pages/ListadoDeEmpleados/ListadoDeEmpleados";
import ListadoDeProveedores from "./pages/ListadoDeProveedores/ListadoDeProveedores";
import ListadoDeClientes from "./pages/ListadoDeClientes/ListadoDeClientes";
import ListadoDeVentas from "./pages/ListadoDeVentas/ListadoDeVentas";
import ListadoDeDeudores from "./pages/ListadoDeDeudores/ListadoDeDeudores";
import ReporteDeCompras from "./pages/ReporteDeCompras/ReporteDeCompras";
import EmpleadoPerfil from "./pages/EmpleadoPerfil/EmpleadoPerfil";

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
    path: "prod/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "prod/materias/crear",
    element: <CrearNuevaMateriaPrimaPage />,
  },
  {
    path: "prod/materias/:id",
    element: <DetalleMateriaPage />,
  },
  {
    path: "prod/productos",
    element: <ListadoProductosPage />,
  },
  {
    path: "prod/productos/:id",
    element: <DetalleProductoPage />,
  },
  {
    path: "prod/productos/crear",
    element: <NuevoProductoPage />,
  },
  {
    path: "prod/pendientes",
    element: <ListadoPedidosPendientesPage />,
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
    path: "ventas/clientes",
    element: <ListadoClientesPage />,
  },
  {
    path: "ventas/proveedores",
    element: <ListadoProveedoresPage />,
  },
  {
    path: "ventas/productos",
    element: <ListadoProductosPage />,
  },
  {
    path: "ventas/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "ventas/clientes/:id",
    element: <DetalleCientePage />,
  },
  {
    path: "ventas/proveedores/:id",
    element: <DetalleProveedorPage />,
  },
  {
    path: "ventas/materias/:id",
    element: <DetalleMateriaPage />,
  },
  {
    path: "ventas/clientes/crear",
    element: <NuevoClientePage />,
  },
  {
    path: "ventas/proveedores/crear",
    element: <NuevoProveedorPage />,
  },
  {
    path: "admin",
    element: <AdminHomePage />,
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
    path: "admin/ventas",
    element: <ListadoDeVentas />,
  },
  {
    path: "admin/compras",
    element: <ReporteDeCompras />,
  },
  {
    path: "admin/deudores",
    element: <ListadoDeDeudores />,
  },
  {
    path: "admin/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "admin/empleado/perfil",
    element: <EmpleadoPerfil />,
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
