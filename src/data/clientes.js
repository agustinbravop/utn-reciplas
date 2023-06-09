const clientes = [
  {
    id: 1,
    name: "Jose Lopez",
    mail: "joselop@gmail.com",
    cel: "123456789",
    tipo: "Empresa",
    regDate: "01/01/2011",
    debt: 0.0,
  },
  {
    id: 2,
    name: "Esteban Ramirez",
    mail: "estRam@gmail.com",
    cel: "987654321",
    tipo: "Particular", //El otro tipo es Empresa
    regDate: "01/01/2009",
    debt: 0.0,
  },
  {
    id: 3,
    name: "Maria Paz Gonzales",
    mail: "marpgonza@gmail.com",
    cel: "456387432",
    tipo: "Particular",
    regDate: "01/01/2012",
    debt: 1532.4,
  },
];

const findAllClientes = () => {
  return clientes;
};

const findAllClientesDeudores = () => {
  return clientes.filter((c) => c.debt > 0);
};

const findClienteByID = (id) => {
  return clientes.find((c) => c.id === id);
};

export { findAllClientes, findClienteByID, findAllClientesDeudores };
