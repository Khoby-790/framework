import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import crypto from 'crypto';
import User from '../../Models/User';
import Controller from '../../../vendor/Controller';


class LoginController extends Controller {
    static index(req, res){
        res.render('auth/login');
    }

    static login(){
    	passport.authenticate('local',{
    		failureRedirect:'/users/login',
    		failureFlash:true
    	})
    }

    static rememberMe(req, res, next){
    	if (req.body.remember) {
		  req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
		} else {
		  req.session.cookie.expires = false; // Cookie expires at end of session
		}
		next();
    }

    static loginRedirect(req, res){
    	let path = req.session.redirect_to;
    	delete req.session.redirect_to;
    	res.redirect(path || '/');
    }

    static logout(req, res){
    	req.logout();
    	res.redirect('/users/login');
    }

}



export default LoginController