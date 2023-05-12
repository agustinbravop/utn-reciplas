const clientes = [
  {
    id: 1,
    name: "Jose Lopez",
    mail: "joselop@gmail.com",
    cel: "123456789",
    debt: 154.89,
  },
  {
    id: 2,
    name: "Esteban Ramirez",
    mail: "estRam@gmail.com",
    cel: "987654321",
    debt: 2894.5,
  },
  {
    id: 3,
    name: "Maria Paz Gonzales",
    mail: "marpgonza@gmail.com",
    cel: "456387432",
    debt: 1532,
  },
];

const findAllClientes = () => {
  return clientes;
};

const findClienteByID = (id) => {
  return clientes.find((c) => c.id === id);
};

export { findAllClientes, findClienteByID };
