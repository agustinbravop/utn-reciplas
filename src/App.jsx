import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./pages/LogInPage/LogInPage";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import ProdHomePage from "./pages/ProdHomePage/ProdHomePage";
import NuevoProductoPage from "./pages/productos/NuevoProductoPage/NuevoProductoPage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import ComprasHomePage from "./pages/ComprasHomePage/ComprasHomePage";
import VentasHomePage from "./pages/VentasHomePage/VentasHomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ListadoVentasPage from "./pages/ventas/ListadoVentasPage/ListadoVentasPage";
import ListadoClientesPage from "./pages/clientes/ListadoClientesPage/ListadoClientesPage";
import ListadoProveedoresPage from "./pages/proveedores/ListadoProveedoresPage/ListadoProveedoresPage";
import CrearNuevaMateriaPrimaPage from "./pages/materias/NuevaMateriaPage/NuevaMateriaPage";
import ListadoMateriasPrimasPage from "./pages/materias/ListadoMateriasPrimasPage/ListadoMateriasPrimas";
import DetalleMateriaPage from "./pages/materias/DetalleMateriaPage/DetalleMateriaPage";
import DetalleProductoPage from "./pages/productos/DetalleProductoPage/DetalleProductoPage";
import ListadoProductosPage from "./pages/productos/ListadoProductosPage/ListadoProductosPage";
import DetalleCientePage from "./pages/clientes/DetalleClientePage/DetalleClientePage";
import NuevoClientePage from "./pages/clientes/NuevoClientePage/NuevoClientePage";
import NuevoProveedorPage from "./pages/proveedores/NuevoProveedorPage/NuevoProveedorPage";
import DetalleProveedorPage from "./pages/proveedores/DetalleProveedorPage/DetalleProveedorPage";
import ListadoEmpleadosPage from "./pages/empleados/ListadoEmpleadosPage/ListadoEmpleadosPage";
import ListadoComprasPage from "./pages/compras/ListadoComprasPage/ListadoComprasPage";
import DetalleEmpleadoPage from "./pages/empleados/DetalleEmpleadoPage/DetalleEmpleadoPage";
import NuevoEmpleadoPage from "./pages/empleados/NuevoEmpleadoPage/NuevoEmpleadoPage";
import NuevaMateriaPage from "./pages/materias/NuevaMateriaPage/NuevaMateriaPage";

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
    path: "prod/materias/:id",
    element: <DetalleMateriaPage />,
  },
  {
    path: "prod/materias/crear",
    element: <CrearNuevaMateriaPrimaPage />,
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
    path: "prod/pedidos",
    element: {},
  },
  {
    path: "prod/pedidos/:id",
    element: {},
  },
  {
    path: "prod/ingresos",
    element: {},
  },
  {
    path: "compras",
    element: <ComprasHomePage />,
  },
  {
    path: "compras/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "compras/productos",
    element: <ListadoProductosPage />,
  },
  {
    path: "compras/compras",
    element: {},
  },
  {
    path: "compras/compras/:id",
    element: {},
  },
  {
    path: "compras/proveedores",
    element: <ListadoProveedoresPage />,
  },
  {
    path: "compras/proveedores/:id",
    element: <DetalleProveedorPage />,
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
    path: "ventas/clientes/:id",
    element: <DetalleCientePage />,
  },
  {
    path: "ventas/clientes/crear",
    element: <NuevoClientePage />,
  },
  {
    path: "ventas/proveedores",
    element: <ListadoProveedoresPage />,
  },
  {
    path: "ventas/proveedores/:id",
    element: <DetalleProveedorPage />,
  },
  {
    path: "ventas/proveedores/crear",
    element: <NuevoProveedorPage />,
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
    path: "admin",
    element: <AdminHomePage />,
  },
  {
    path: "admin/empleados",
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
    path: "admin/proveedores/:id",
    element: <DetalleProveedorPage />,
  },
  {
    path: "admin/clientes",
    element: <ListadoClientesPage />,
  },
  {
    path: "admin/clientes/:id",
    element: <DetalleCientePage />,
  },
  {
    path: "admin/ventas",
    element: <ListadoVentasPage />,
  },
  {
    path: "admin/compras",
    element: <ListadoComprasPage />,
  },
  {
    path: "admin/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "admin/materias/crear",
    element: <NuevaMateriaPage />,
  },
  {
    path: "admin/productos",
    element: <ListadoProductosPage />,
  },
  {
    path: "admin/productos/crear",
    element: <NuevoProductoPage />,
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
