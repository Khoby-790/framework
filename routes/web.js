import express from 'express';
import HomeController from '../app/Conttrollers/HomeController';
import StudentController from '../app/Conttrollers/StudentController';
import Middleware from '../app/Config/middleware';
const multer = require('multer');

global.__basedir = __dirname;

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
	   cb(null, __basedir + '../public/uploads/')
	},
	filename: (req, file, cb) => {
	   cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
	}
});

const upload = multer({storage: storage});


const Route = express.Router();

Route.get('/',Middleware.ensureAuthenticated,HomeController.index);
Route.get('/home',Middleware.ensureAuthenticated,HomeController.index);
Route.get('/student/add_student',Middleware.ensureAuthenticated,HomeController.add_student);
Route.post('/add_student',/*upload.single('student_avatar')*/StudentController.createStduent);
Route.post('/add_student_bulk',upload.single('students_file'),StudentController.createStduent);
Route.get('/student/add_students', Middleware.ensureAuthenticated, HomeController.add_students_from_file);
Route.get('/student/add_parent', Middleware.ensureAuthenticated, HomeController.add_student_parent);
Route.post('/try',HomeController.create);

export default Route