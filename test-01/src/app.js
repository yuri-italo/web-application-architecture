const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const markerRoutes = require('./routes/markerRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://yuriinformaticaif:${process.env.PASSWORD}@cluster0.tw6p8y5.mongodb.net/Maps?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/', markerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});