const materiasPrimas = [
  {
    id: 1,
    descripcion: "Plástico ABC",
    calidad: "Excelente",
    deposito: "A2",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40",
    movimientos: [
      {
        usuario: "Sr. Producción",
        cantidad: -10.4,
        fecha: "14/10/2022",
      },
      {
        usuario: "Sr. Comptas",
        cantidad: 22.9,
        fecha: "10/10/2022",
      },
    ],
  },
  {
    id: 2,
    descripcion: "Tuercas y tornillos",
    calidad: "Buena",
    deposito: "C8",
    cantidad: 125.1,
    ultimoCambio: "30/12/2022 16:40",
  },
  {
    id: 3,
    descripcion: "Aserrín",
    calidad: "Mala",
    deposito: "A1",
    cantidad: 798.2,
    ultimoCambio: "30/12/2022 16:40",
  },
  {
    id: 4,
    descripcion: "Chapa hierro 20x25cm",
    calidad: "Excelente",
    deposito: "B3",
    cantidad: 0,
    ultimoCambio: "30/12/2022 16:40",
  },
];

const findAllMateriasPrimas = () => {
  return materiasPrimas;
};

const findMateriaPrimaByID = (id) => {
  return materiasPrimas.find((m) => m.id === id);
};

export { findAllMateriasPrimas, findMateriaPrimaByID };
