'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    UserType: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // User.hasOne(models.Student);
  };
  return User;
};


