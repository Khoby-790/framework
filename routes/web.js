import express from 'express';
import HomeController from '../app/Conttrollers/HomeController';
import Middleware from '../app/Config/middleware';

const Route = express.Router();

Route.get('/',Middleware.ensureAuthenticated,HomeController.index);

export default Route