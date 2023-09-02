const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Configuração do body-parser
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost/movies-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configurar as rotas
app.use('/', movieRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
