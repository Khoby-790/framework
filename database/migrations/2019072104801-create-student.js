'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      gender:{
          type: Sequelize.STRING
      },
      dob:{
        type: Sequelize.DATE
      },
      roll:{
        type: Sequelize.INTEGER
      },
      blood_group:{
        type: Sequelize.STRING
      },
      religion:{
        type: Sequelize.STRING
      },
      class:{
        type: Sequelize.STRING
      },
      section:{
        type: Sequelize.STRING
      },
      admission_id:{
        type: Sequelize.STRING
      },
      short_bio:{
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      student_avatar:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};