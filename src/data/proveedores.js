const proveedores = [
  {
    id: 1,
    name: "Juan Carlos",
    mail: "juan@gmail.com",
    cel: "13456789",
    tipo: "Insumos varios",
    cuit: "20-20596661-1",
  },
  {
    id: 2,
    name: "Esteban",
    mail: "estebanEm@gmail.com",
    cel: "13456789",
    tipo: "Maderas",
    cuit: "20-20596870-1",
  },
  {
    id: 3,
    name: "Anahi Villabuena",
    mail: "anaV@gmail.com",
    cel: "13456789",
    tipo: "Plásticos",
    cuit: "20-20596346-1",
  },
];

const findAllProveedores = () => {
  return proveedores;
};

const findProveedorByID = (id) => {
  return proveedores.find((p) => p.id === id);
};

export { findAllProveedores, findProveedorByID };
