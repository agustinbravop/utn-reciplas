const compras = [
  {
    id: 1,
    idProveedor: 1,
    fecha: "30/12/2022 16:40",
    estado: "Recibida y pagada",
    materias: [
      {
        idMateria: 1,
        precio: 390,
        cantidad: 2.6,
      },
      {
        idMateria: 2,
        precio: 4400,
        cantidad: 1.2,
      },
    ],
  },
  {
    id: 2,
    idProveedor: 2,
    fecha: "31/12/2022 07:40",
    estado: "Recibida sin pagar",
    materias: [
      {
        idMateria: 1,
        precio: 390,
        cantidad: 2.6,
      },
      {
        idMateria: 2,
        precio: 4400,
        cantidad: 1.2,
      },
    ],
  },
  {
    id: 3,
    idProveedor: 2,
    fecha: "30/12/2022 18:30",
    estado: "Pendiente",
    materias: [
      {
        idMateria: 4,
        precio: 990,
        cantidad: 0.6,
      },
      {
        idMateria: 2,
        precio: 2090,
        cantidad: 0.4,
      },
    ],
  },
  {
    id: 4,
    idProveedor: 3,
    fecha: "01/01/2023 09:13",
    estado: "Recibida y pagada",
    materias: [
      {
        idMateria: 1,
        precio: 390,
        cantidad: 2.6,
      },
      {
        idMateria: 2,
        precio: 4400,
        cantidad: 1.2,
      },
    ],
  },
];

const findAllCompras = () => {
  return compras;
};

const findComprasByID = (id) => {
  return compras.find((c) => c.id === id);
};

export { findAllCompras, findComprasByID };
