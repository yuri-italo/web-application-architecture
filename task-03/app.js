// app.js
const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./src/routes/movieRoutes');
const sequelize = require('./src/config/database');


const app = express();

app.use(bodyParser.json());

app.use('/api', movieRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
