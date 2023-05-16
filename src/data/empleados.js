const empleados = [
  {
    id: 1,
    nombre: "Juan Smith",
    sector: "Administración",
    telefono: "362786980",
  },
  {
    id: 2,
    nombre: "Carla Ramirez",
    sector: "Ventas",
    telefono: "362795676",
  },
  {
    id: 3,
    nombre: "Victoria Picolli",
    sector: "Producción",
    telefono: "362468879",
  },
  {
    id: 4,
    nombre: "Mariano Altamirano",
    sector: "Compras",
    telefono: "362346768",
  },
];

const findAllEmpleados = () => {
  return empleados;
};

const findEmpleadoByID = (id) => {
  return empleados.find((c) => c.id === id);
};

export { findAllEmpleados, findEmpleadoByID };
