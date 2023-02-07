db.produtos.find({
  "valoresNutricionais.0.quantidade": { $lte: 500 },
}, {
  nome: true,
  _id: false,
});