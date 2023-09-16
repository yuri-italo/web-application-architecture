const sequelize = require("../config/database");
const Movie = require("./Movie");

const models = {
  Movie,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = {
  ...models,
  sequelize,
};
