'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    gender:{
        type: DataTypes.STRING
    },
    dob:{
      type: DataTypes.DATE
    },
    roll:{
      type: DataTypes.INTEGER
    },
    blood_group:{
      type: DataTypes.STRING
    },
    religion:{
      type: DataTypes.STRING
    },
    class:{
      type: DataTypes.STRING
    },
    section:{
      type: DataTypes.STRING
    },
    admission_id:{
      type: DataTypes.STRING
    },
    short_bio:{
      type: DataTypes.STRING
    },
    contact: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    student_avatar:{
      type: DataTypes.STRING
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    models.Student.hasOne(models.StudentParent);
    // models.Student.belongsTo(models.User);
  };
  return Student;
};



// const { Model } = require("sequelize");
// class Student extends Model {
//   static init(sequelize, DataTypes) {
//     return super.init({
//         id: {
//           type: DataTypes.STRING,
//           primaryKey: true,
//         },
//         sex: DataTypes.STRING,
//         dob: DataTypes.DATE,
//         contact: DataTypes.STRING,
//         address: DataTypes.STRING,
//         postal_address: DataTypes.STRING,
//       },
//       { sequelize }
//     );
//   }
//   static associate (models) {
//     // associations can be defined here
//     models.Student.hasOne(models.StudentParent);
//     models.Student.belongsTo(models.User);
//   }
// }

// export default new Student();
