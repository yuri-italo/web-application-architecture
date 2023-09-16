const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('', {
  cod: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sinopse: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  duracao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  imagem: {
    type: DataTypes.BLOB('long'),
    allowNull: true,
  },
  dataLancamento: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'movies',
  timestamps: false, // Desabilita os campos createdAt e updatedAt
});

module.exports = Movie;