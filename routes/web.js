import express from 'express';
import HomeController from '../app/Conttrollers/HomeController';
import Middleware from '../app/Config/middleware';


const Route = express.Router();

Route.get('/',Middleware.ensureAuthenticated,HomeController.index);
Route.get('/home',Middleware.ensureAuthenticated,HomeController.index);
Route.get('/student/add_student',Middleware.ensureAuthenticated,HomeController.add_student);
Route.get('/student/add_students', Middleware.ensureAuthenticated, HomeController.add_students_from_file);
Route.get('/student/add_parent', Middleware.ensureAuthenticated, HomeController.add_student_parent);
Route.post('/try',HomeController.create);

export default Route