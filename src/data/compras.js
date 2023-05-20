const compras = [
  {
    id: 1,
    product: "Herramientas",
    units: 18,
    price: 9860,
  },
  {
    id: 2,
    product: "Madera",
    units: 10,
    price: 4500,
  },
  {
    id: 3,
    product: "Insumos de limpieza",
    units: 20,
    price: 800,
  },
  {
    id: 4,
    product: "Plástico",
    units: 45,
    price: 10800,
  },
];

const findAllCompras = () => {
  return compras;
};

const findComprasByID = (id) => {
  return compras.find((c) => c.id === id);
};

export { findAllCompras, findComprasByID };
