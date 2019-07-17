import {Router} from 'express';
import passport from 'passport';
import LoginController from '../app/Conttrollers/Auth/LoginController';
import RegisterController from '../app/Conttrollers/Auth/RegisterController';
import ErrorHandler from '../app/Config/ErrorHandlers';
import Middleware from '../app/Config/middleware';

const router = new Router();


// routes

//register
router.get('/register', Middleware.forwardAuthenticated, RegisterController.index);
router.post('/register', RegisterController.validateRegister, RegisterController.register);

//login
router.get('/login',LoginController.index);
router.post('/login', 
		passport.authenticate('local',{
    		failureRedirect:'/users/login',
    		failureFlash:true
    	}), 
		LoginController.rememberMe, 
		LoginController.loginRedirect
		);
router.get('/logout', LoginController.logout);

export default router