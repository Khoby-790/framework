'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    sex: DataTypes.STRING,
    dob: DataTypes.DATE,
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    postal_address: DataTypes.STRING,
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    models.Student.hasOne(models.StudentParent);
    models.Student.belongsTo(models.User);
  };
  return Student;
};

