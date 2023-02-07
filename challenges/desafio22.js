db.produtos.updateMany({}, {
  $set: {
    vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
  },
});

db.produtos.updateMany({
  nome: "Big Mac",
}, {
  $set: {
    vendasPorDia: [0, 0, 0, 60, 0, 0, 120],
  },
});

db.produtos.find({}, 
  {
  nome: true,
  vendasPorDia: true,
  _id: false,
  });