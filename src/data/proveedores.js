const proveedores = [
  {
    id: 1,
    name: "Juan Carlos",
    mail: "juan@gmail.com",
    cel: "13456789",
    tipo: "Insumos varios",
  },
  {
    id: 1,
    name: "Esteban",
    mail: "estebanEm@gmail.com",
    cel: "13456789",
    tipo: "Madera",
  },
  {
    id: 3,
    name: "Anahi Villabuena",
    mail: "anaV@gmail.com",
    cel: "13456789",
    tipo: "Pallets",
  },
];

const findAllProveedores = () => {
  return proveedores;
};

const findProveedorByID = (id) => {
  return proveedores.find((p) => p.id === id);
};

export { findAllProveedores, findProveedorByID };
