const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  titulo: String,
  sinopse: String,
  duracao: Number,
  dataLancamento: Date,
  imagem: String,
  categorias: [String],
});

module.exports = mongoose.model('Movie', movieSchema);
