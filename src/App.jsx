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
import ListadoProveedoresPage from "./pages/ListadoProveedoresPage/ListadoProveedoresPage";
import CrearNuevaMateriaPrimaPage from "./pages/CrearNuevaMateriaPrimaPage/CrearNuevaMateriaPrimaPage";
import ListadoMateriasPrimasPage from "./pages/ListadoMateriasPrimasPage/ListadoMateriasPrimas";
import DetalleMateriaPage from "./pages/DetalleMateriaPage/DetalleMateriaPage";
import DetalleProductoPage from "./pages/DetalleProductoPage/DetalleProductoPage";
import ListadoPedidosPendientesPage from "./pages/ListadoPedidosPendientesPage/ListadoPedidosPendientesPage";
import ListadoProductosPage from "./pages/ListadoProductosPage/ListadoProductosPage";
import DetalleCientePage from './pages/DetalleClientePage/DetalleClientePage'
import AltaClientePage from "./pages/AltaClientePage/AltaClientePage";
import AltaProveedorPage from "./pages/AltaProveedorPage/AltaProveedorPage";
import DetalleProveedoresPage from './pages/DetalleProveedoresPage/DetalleProveedoresPage'


import ListadoDeEmpleados from "./pages/ListadoDeEmpleados/ListadoDeEmpleados";
import ListadoDeProveedores from "./pages/ListadoDeProveedores/ListadoDeProveedores";
import ListadoDeClientes from "./pages/ListadoDeClientes/ListadoDeClientes";
import ListadoDeVentas from "./pages/ListadoDeVentas/ListadoDeVentas";
import ListadoDeDeudores from "./pages/ListadoDeDeudores/ListadoDeDeudores";
import ReporteDeCompras from "./pages/ReporteDeCompras/ReporteDeCompras";
import ListadoDeMaterias from "./pages/ListadoDeMaterias/ListadoDeMaterias";
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
    path: "admin/Compras",
    element: <ReporteDeCompras />,
  },
  {
    path: "admin/deudores",
    element: <ListadoDeDeudores/>,
  },
  {
    path: "admin/materias",
    element: <ListadoDeMaterias/>,
  },
  {
    path: "admin/empleado/perfil",
    element: <EmpleadoPerfil/>,
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
  },  {
    path: "prod/productos/:id",
    element: <DetalleProductoPage />,
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
    element: <DetalleProveedoresPage />,
  },
  {
    path: "ventas/materias/:id",
    element: <DetalleMateriaPage />,
  },
  {
    path: "ventas/clientes/alta",
    element: <AltaClientePage />,
  },
  {
    path: "ventas/proveedores/alta",
    element: <AltaProveedorPage />,
  },
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
