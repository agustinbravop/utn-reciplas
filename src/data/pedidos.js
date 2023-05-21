const pedidosPendientes = [
  {
    id: 1,
    idClient: 1,
    state: "En proceso",
    deadline: "30/12/2022 16:40",
    content : [
      {
        idProd: 1,
        amount: 4
      }
    ]
  },
  {
    id: 2,
    idClient: 2,
    state: "En proceso",
    deadline: "30/12/2022 16:40",
    content : [
      {
        idProd: 2,
        amount: 3
      },
      {
        idProd: 1,
        amount: 5
      },
    ]
  },
  {
    id: 3,
    idClient: 3,
    state: "En proceso",
    deadline: "30/12/2022 16:40",
    content : [
      {
        idProd: 3,
        amount: 10
      },
    ]
  },
  {
    id: 4,
    idClient: 2,
    state: "En proceso",
    deadline: "30/12/2022 16:40",
    content : [
      {
        idProd: 3,
        amount: 1
      },
    ]
  },
];

const findAllPedidosPendientes = () => {
  return pedidosPendientes;
};

const findPedidoPendienteByID = (id) => {
  return pedidosPendientes.find((p) => p.id === id);
};

export { findAllPedidosPendientes, findPedidoPendienteByID };
