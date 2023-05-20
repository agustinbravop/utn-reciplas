const ventas = [
  {
    id: 1,
    client: "Jose Lopez",
    product: "Mueble",
    units: 4,
    type: "Mesa",
    unitCost: 1000,
  },
  {
    id: 2,
    client: "Esteban Gimenez",
    product: "Mueble",
    units: 7,
    type: "Silla",
    unitCost: 470,
  },
  {
    id: 3,
    client: "Maria Fernanda",
    product: "Pallet",
    units: 8,
    type: "Mediano",
    unitCost: 285,
  },
  {
    id: 1,
    client: "Jose Lopez",
    product: "Plastico",
    units: 15,
    type: "Botellas",
    unitCost: 1000,
  },
];

const findAllVentas = () => {
  return ventas;
};

const findVentaByID = (id) => {
  return ventas.find((c) => c.id === id);
};

export { findAllVentas, findVentaByID };
