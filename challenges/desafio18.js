db.produtos.updateMany({
  $or: [
   { nome: { $eq: "Big Mac" } },
   { nome: { $eq: "Quarteirão com Queijo" } },
  ],
}, {
  $push: {
    ingredientes: "bacon",
  },
});

db.produtos.find({}, 
  {
  nome: true,
  ingredientes: true,
  _id: false,
  });
