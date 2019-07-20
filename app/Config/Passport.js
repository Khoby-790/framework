import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Models from '../Models';
const User = Models.User;
const LocalStragtegy = require('passport-local').Strategy;

module.exports = function(passport){
	passport.use(
		new LocalStragtegy({usernameField:'email'},(email, password, done) => {
			//Match User
			User.findOne({
				where: {
					email:email
				}
			})
			.then(user => {
				if(!user){
					console.log("user does not exist")
					return done(null, false, {message:'That email is not registered'});
				}

			  // Match password
			  console.log(user);
			  bcrypt.compare(password, user.password, (err, isMatch) => {
				  if (err) throw err;
				  if(isMatch){
					  
					  return done(null, user);
				  }else{
					console.log("authenticated");
					  return done(null,false, {message: 'Password incorrect'});
				  }
			  });
			}).catch();
		})
	);

	passport.serializeUser(function(user, done){
		done(null,user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findByPk(id).then((err, user)=>{
			if(err){
				done(err,null);
			}else{
				done(null, user);
			}
		});
	});
}
	  

// export default Auth