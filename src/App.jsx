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
import ListadoEmpleadosPage from "./pages/ListadoEmpleadosPage/ListadoEmpleadosPage";
import ListadoDeDeudores from "./pages/ListadoDeDeudores/ListadoDeDeudores";
import ReporteDeCompras from "./pages/ReporteDeCompras/ReporteDeCompras";
import DetalleEmpleadoPage from "./pages/DetalleEmpleadoPage/DetalleEmpleadoPage";
import NuevoEmpleadoPage from "./pages/NuevoEmpleadoPage/NuevoEmpleadoPage";

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
    path: "admin/empleados/",
    element: <ListadoEmpleadosPage />,
  },
  {
    path: "admin/empleados/:id",
    element: <DetalleEmpleadoPage />,
  },
  {
    path: "admin/empleados/crear",
    element: <NuevoEmpleadoPage />,
  },
  {
    path: "admin/proveedores",
    element: <ListadoProveedoresPage />,
  },
  {
    path: "admin/clientes",
    element: <ListadoClientesPage />,
  },
  {
    path: "admin/ventas",
    element: <ListadoVentasPage />,
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
    element: <DetalleEmpleadoPage />,
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
