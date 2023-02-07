db.produtos.updateMany({
  nome: "Big Mac",
}, {
  $currentDate: {
    ultimaAlteracao: { $type: "timestamp" },
  },
});

db.produtos.find({
  ultimaAlteracao: { $exists: true },
  }, {
  nome: true, _id: false,
});