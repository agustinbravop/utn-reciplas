const empleados = [
  {
    id: 1,
    nombre: "Juan Smith",
    correo: "juansmith@reciplas.com",password: "juansmith",
    sector: "Administración",
    telefono: "362786980",
  },
  {
    id: 2,
    nombre: "Carla Ramirez",
    correo: "carlaramirez@reciplas.com",password: "carlaramirez",
    sector: "Ventas",
    telefono: "362795676",
  },
  {
    id: 3,
    nombre: "Victoria Picolli",
    correo: "victoriapicolli@reciplas.com",password: "victoriapicolli",
    sector: "Producción",
    telefono: "362468879",
  },
  {
    id: 4,
    nombre: "Mariano Altamirano",
    correo: "marianoaltamirano@reciplas.com",password: "marianoaltamirano",
    sector: "Compras",
    telefono: "362346768",
  },
  {
    id: 5,
    nombre: "Valentín Sánchez",
    correo: "valentinsanchez@reciplas.com",password: "valentinsanchez",
    sector: "Ventas",
    telefono: "362795122",
  },
];

const findAllEmpleados = () => {
  return empleados;
};

const findEmpleadoByID = (id) => {
  return empleados.find((c) => c.id === id);
};

export { findAllEmpleados, findEmpleadoByID };
