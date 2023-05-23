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
import ListadoVentasPage from "./pages/pedidos/ListadoVentasPage/ListadoVentasPage";
import ListadoClientesPage from "./pages/clientes/ListadoClientesPage/ListadoClientesPage";
import ListadoProveedoresPage from "./pages/proveedores/ListadoProveedoresPage/ListadoProveedoresPage";
import CrearNuevaMateriaPrimaPage from "./pages/materias/NuevaMateriaPage/NuevaMateriaPage";
import ListadoMateriasPrimasPage from "./pages/materias/ListadoMateriasPrimasPage/ListadoMateriasPrimas";
import DetalleMateriaPage from "./pages/materias/DetalleMateriaPage/DetalleMateriaPage";
import DetalleProductoPage from "./pages/productos/DetalleProductoPage/DetalleProductoPage";
import ListadoProductosPage from "./pages/productos/ListadoProductosPage/ListadoProductosPage";
import DetalleClientePage from "./pages/clientes/DetalleClientePage/DetalleClientePage";
import NuevoClientePage from "./pages/clientes/NuevoClientePage/NuevoClientePage";
import NuevoProveedorPage from "./pages/proveedores/NuevoProveedorPage/NuevoProveedorPage";
import DetalleProveedorPage from "./pages/proveedores/DetalleProveedorPage/DetalleProveedorPage";
import ListadoEmpleadosPage from "./pages/empleados/ListadoEmpleadosPage/ListadoEmpleadosPage";
import ListadoComprasPage from "./pages/compras/ListadoComprasPage/ListadoComprasPage";
import DetalleEmpleadoPage from "./pages/empleados/DetalleEmpleadoPage/DetalleEmpleadoPage";
import NuevoEmpleadoPage from "./pages/empleados/NuevoEmpleadoPage/NuevoEmpleadoPage";
import NuevaMateriaPage from "./pages/materias/NuevaMateriaPage/NuevaMateriaPage";
import DetalleCompraPage from "./pages/compras/DetalleCompraPage/DetalleCompraPage";
import ListadoPedidosPendientesPage from "./pages/pedidos/ListadoPedidosPendientesPage/ListadoPedidosPendientesPage";
import DetallePedidoPendientePage from "./pages/pedidos/DetallePedidoPendientePage/DetallePedidoPendientePage";
import DetalleVentaPage from "./pages/pedidos/DetalleVentaPage/DetalleVentaPage";

const routes = [
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
    element: <ListadoPedidosPendientesPage />,
  },
  {
    path: "prod/pedidos/:id",
    element: <DetallePedidoPendientePage />,
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
    path: "compras/materias/:id",
    element: <DetalleMateriaPage />,
  },
  {
    path: "compras/productos",
    element: <ListadoProductosPage />,
  },
  {
    path: "compras/productos/:id",
    element: <DetalleProductoPage />,
  },
  {
    path: "compras/compras",
    element: <ListadoComprasPage />,
  },
  {
    path: "compras/compras/:id",
    element: <DetalleCompraPage />,
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
    element: <DetalleClientePage />,
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
    path: "ventas/productos/:id",
    element: <DetalleProductoPage />,
  },
  {
    path: "ventas/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "ventas/materias/:id",
    element: <DetalleMateriaPage />,
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
    path: "admin/proveedores/crear",
    element: <NuevoProveedorPage />,
  },
  {
    path: "admin/clientes",
    element: <ListadoClientesPage />,
  },
  {
    path: "admin/clientes/:id",
    element: <DetalleClientePage />,
  },
  {
    path: "admin/clientes/crear",
    element: <NuevoClientePage />,
  },
  {
    path: "admin/ventas",
    element: <ListadoVentasPage />,
  },
  {
    path: "admin/ventas/:id",
    element: <DetalleVentaPage />,
  },
  {
    path: "admin/compras",
    element: <ListadoComprasPage />,
  },
  {
    path: "admin/compras/:id",
    element: <DetalleCompraPage />,
  },
  {
    path: "admin/materias",
    element: <ListadoMateriasPrimasPage />,
  },
  {
    path: "admin/materias/:id",
    element: <DetalleMateriaPage />,
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
    path: "admin/productos/:id",
    element: <DetalleProductoPage />,
  },
  {
    path: "admin/productos/crear",
    element: <NuevoProductoPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes, { basename: "/utn-reciplas" });

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
