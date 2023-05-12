const productos = [
    {
      id: 1,
      descripcion: "Mesa Ratona",
      linea: "Mueble",
      deposito: "A2",
      cantidad: 37,
      ultimoCambio: "30/12/2022 16:40",
    },
    {
      id: 2,
      descripcion: "Baso Mediano Normal",
      linea: "Plasticos",
      deposito: "E7",
      cantidad: 12,
      ultimoCambio: "30/12/2022 16:40",
    },
    {
      id: 3,
      descripcion: "Silla Dura",
      linea: "Mueble",
      deposito: "E5",
      cantidad: 15,
      ultimoCambio: "30/12/2022 16:40",
    },
    {
      id: 4,
      descripcion: "Bolsa de 20 Pallets",
      linea: "Pallets",
      deposito: "B1",
      cantidad: 189,
      ultimoCambio: "30/12/2022 16:40",
    },
  ];
  
  const findAllProductos = () => {
    return productos;
  };
  
  const findProductoByID = (id) => {
    return productos.find((m) => m.id === id);
  };
  
  export { findAllProductos, findProductoByID };
  