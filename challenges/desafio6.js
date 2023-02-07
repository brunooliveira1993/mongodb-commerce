db.produtos.find({
  curtidas: { $gte: 10, $lte: 100 },
}, {
  nome: true,
  curtidas: true,
  _id: false,
});