import Sequelize from 'sequelize';
const sequelize = new Sequelize();


//Bring in the Models here
import User from '../app/Models/User';
const myUser = new User();

const models = {
    User: myUser.init(sequelize),
}

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));


  const db = {
    ...models,
    sequelize
  };

  module.exports = db;
