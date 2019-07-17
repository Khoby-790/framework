import {Router} from 'express';

import LoginController from '../app/Conttrollers/Auth/LoginController';
import RegisterController from '../app/Conttrollers/Auth/RegisterController';
import ErrorHandler from '../app/Config/ErrorHandlers';
import Middleware from '../app/Config/middleware';

const router = new Router();


// routes
router.get('/login',LoginController.index);

//register
router.get('/register', Middleware.ensureAuthenticated, RegisterController.index);
router.post('/register', RegisterController.validateRegister, RegisterController.register);
router.post('/login',LoginController.login, LoginController.rememberMe, LoginController.loginRedirect);
router.get('/logout', LoginController.logout);

export default router


