const pedidos = [
  {
    id: 1,
    date: "01/01/2023 09:33",
    idClient: 1,
    idSeller: 2,
    state: "En fabricación",
    deadline: "30/12/2022 16:40",
    content: [
      {
        idProd: 1,
        price: 25430.96,
        amount: 4,
      },
    ],
  },
  {
    id: 2,
    date: "31/12/2022 23:59",
    idClient: 2,
    idSeller: 5,
    state: "En fabricación",
    deadline: "30/12/2022 16:40",
    content: [
      {
        idProd: 2,
        price: 8800.97,
        amount: 3,
      },
      {
        idProd: 1,
        price: 1995.95,
        amount: 5,
      },
    ],
  },
  {
    id: 3,
    date: "31/12/2022 09:25",
    idClient: 3,
    idSeller: 2,
    state: "En fabricación",
    deadline: "30/12/2022 16:40",
    content: [
      {
        idProd: 3,
        price: 1039.90,
        amount: 10,
      },
    ],
  },
  {
    id: 4,
    date: "31/12/2022 07:40",
    idClient: 2,
    idSeller: 5,
    state: "En entrega",
    deadline: "30/12/2022 16:40",
    content: [
      {
        idProd: 3,
        price: 2090.99,
        amount: 1,
      },
    ],
  },
];

const findAllPedidos = () => {
  return pedidos;
};

const findAllPedidosPendientes = () => {
  return pedidos.filter((p) => p.state !== "Finalizado");
};

const findPedidoByID = (id) => {
  return pedidos.find((p) => p.id === id);
};

export { findAllPedidos, findPedidoByID, findAllPedidosPendientes };
