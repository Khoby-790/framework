'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    contact: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};