const pedidos = [
  {
    id: 1,
    idClient: 1,
    state: "En proceso",
    price: 2600.99,
    deadline: "30/12/2022 16:40",
    content: [
      {
        idProd: 1,
        amount: 4,
      },
    ],
  },
  {
    id: 2,
    idClient: 2,
    state: "En proceso",
    price: 3670.50,
    deadline: "30/12/2022 16:40",
    content: [
      {
        idProd: 2,
        amount: 3,
      },
      {
        idProd: 1,
        amount: 5,
      },
    ],
  },
  {
    id: 3,
    idClient: 3,
    state: "En proceso",
    price: 1800.90,
    deadline: "30/12/2022 16:40",
    content: [
      {
        idProd: 3,
        amount: 10,
      },
    ],
  },
  {
    id: 4,
    idClient: 2,
    state: "En proceso",
    price: 800.99,
    deadline: "30/12/2022 16:40",
    content: [
      {
        idProd: 3,
        amount: 1,
      },
    ],
  },
];

const findAllPedidos = () => {
  return pedidos;
};

const findAllPedidosPendientes = () => {
  return pedidos.filter((p) => p.state === "En proceso");
};

const findPedidoByID = (id) => {
  return pedidos.find((p) => p.id === id);
};

export { findAllPedidos, findPedidoByID, findAllPedidosPendientes };
