import express from 'express';
import ApiController from '../app/Conttrollers/ApiController';
const Route = express.Router();


Route.get('/',ApiController.index);




export default Route
