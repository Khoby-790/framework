// import Model from '../../vendor/Model';
// import mongoose from 'mongoose';

// class User extends Model{
    
// }

// export default User;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required:true
  },
  email: {
    type: String,
    trim: true,
    required:true
  },
  password: {
    type: String
  },
  resetPasswordToken: String,
  resetPasswordExpires:Date,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at:{
    type:Date,
    default:Date.now
  }
},{
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
