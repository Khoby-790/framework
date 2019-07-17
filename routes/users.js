import {Router} from 'express';

import LoginController from '../app/Conttrollers/Auth/LoginController';
import RegisterController from '../app/Conttrollers/Auth/RegisterController';


const router = new Router();


// routes
router.get('/login',LoginController.index);
router.get('/register',RegisterController.index);


export default router


