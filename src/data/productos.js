const productos = [
  {
    id: 1,
    descripcion: "Mesa Ratona",
    linea: "Mueble",
    deposito: "A2",
    unidades: 37,
    precio: 3670.99,
    ultimoCambio: "30/12/2022 16:40",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfQm8bNdLNXtrdzcuAbnGPXF-g5QL6v8sZg&usqp=CAU",
    movimientos: [
      {
        usuario: "Sr. Ventas",
        unidades: -10,
        fecha: "14/10/2022",
        motivo: "Venta realizada",
      },
      {
        usuario: "Sr. Producción",
        unidades: 22,
        fecha: "10/10/2022",
        motivo: "Producido",
      },
    ],
  },
  {
    id: 2,
    descripcion: "Vaso Mediano",
    linea: "Plasticos",
    deposito: "E7",
    precio: 4400.99,
    unidades: 12,
    ultimoCambio: "30/12/2022 16:40",
    img: "https://images.unsplash.com/photo-1588867702719-969c8ac733d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 3,
    descripcion: "Silla Mecedora",
    linea: "Mueble",
    deposito: "E5",
    precio: 3670.99,
    unidades: 15,
    ultimoCambio: "30/12/2022 16:40",
    img: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 4,
    descripcion: "Bolsa de 20 Pellets",
    linea: "Pallets",
    precio: 2090.99,
    deposito: "B1",
    unidades: 0,
    ultimoCambio: "30/12/2022 16:40",
    img: "https://images.unsplash.com/photo-1564462670440-725c000bcfe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVsbGV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  },
];

const findAllProductos = () => {
  return productos;
};

const findProductoByID = (id) => {
  return productos.find((m) => m.id === id);
};

export { findAllProductos, findProductoByID };
