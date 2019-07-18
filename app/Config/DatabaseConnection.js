import { inspect } from 'util';
import Sequelize from 'sequelize';
import User from '../Models/user';

// Option 1: Passing parameters separately
const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  sequelize
    .authenticate()
    .then(() => {
        User(sequelize,Sequelize);
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

 module.exports = sequelize   