'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentParents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: { type: Sequelize.STRING },
      father_full_name: { type: Sequelize.STRING },
      mother_full_name: { type: Sequelize.STRING },
      contact: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      postal_address: { type: Sequelize.STRING },
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
    return queryInterface.dropTable('StudentParents');
  }
};