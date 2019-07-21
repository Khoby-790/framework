'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('StudentParent', {
    student_id: DataTypes.STRING,
    father_full_name: DataTypes.STRING,
    mother_full_name: DataTypes.STRING,
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    postal_address: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.belongsTo(models.Student);
  };
  return User;
};


/**
 * Full name 
 * date of birth 
 * sex 
 * address
 * telephone
 * Postal address
 * parent name 
 * parent phone number 
 * parent address
 * 
 * 
 *  */