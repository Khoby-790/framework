import express from 'express';
import HomeController from '../app/Conttrollers/HomeController';

const Route = express.Router();

Route.get('/',HomeController.index);

export default Route