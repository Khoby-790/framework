import passport from 'passport';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import models from '../../Models/index';
import Controller from '../../../vendor/Controller';

const User = models.User

class RegisterController extends Controller{
    static index(req, res){
        return res.render('auth/register');
    }

    static validateRegister(req, res, next){
    	const {name, email, password, password2} = req.body;
  
    	req.sanitizeBody('name');
		req.checkBody('name','Name field cannot be empty').notEmpty();
		req.checkBody('email','Email field cannot be empty').isEmail();
		req.sanitizeBody('email').normalizeEmail({
			remove_dots:true,
			remove_extension:true,
			gmail_remove_subaddress:true
		});
		req.checkBody('password','Password field cannot be empty').notEmpty();
		req.checkBody('password2','Confirm password field cannot be empty').notEmpty();
		req.checkBody('password2','Oops, your passwords do not match').equals(password);
		req.checkBody('password','Password must have characters of 6 or more').isLength({min:6});
		let errors = req.validationErrors();
		if(errors){
			res.render('auth/register',{
				errors
			});
		}
		next();
    }

    static register(req, res, next){
		const { name, email, password, password2 } = req.body;
		User.findOne({email: email})
		.then(user => {
			if(user != null){
				let errors = [];
				errors.push({msg:'Email already exists'});
				res.render('auth/register',{
					errors
				});
				return next(null);
			}else{

				User.create({name,email,password}).then(user =>{
					bcrypt.genSalt(10,(err, salt)=>{
						bcrypt.hash(user.password,salt,(err,hash)=>{
							if (err) throw err
							user.update({password: hash}).then(()=>{
								req.flash('success_msg','You are now registered and can login');
								res.redirect('/users/login');
							}).catch(err => console.log(err));
						})
					})
				})
				// const newUser = new User.create({
				// 	name,
				// 	email,
				// 	password
				// });

				// bcrypt.genSalt(10,(err,salt)=>{
				// 	bcrypt.hash(newUser.password, salt, (err, hash)=>{
				// 		if(err) throw err;
				// 		newUser.password = hash;
				// 		newUser
				// 			.update({password: hash})
				// 			.then(user => {
				// 				req.flash('success_msg','You are now registered and can login');
				// 				res.redirect('/users/login');
				// 			})
				// 			.catch(err => console.log(err));
				// 	});		
				// });
			}
		});
    }

}

export default RegisterController