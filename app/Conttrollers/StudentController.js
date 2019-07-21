import Controller from '../../vendor/Controller';
import Models from '../Models';
const User = Models.User;
const Student = Models.Student;

class StudentController extends Controller {


    //registerign a student
    static createStduent(req,res){
        const {name, email, contact, dob, password} = req.body;
        User.create({
            name,
            email,
            password: this.hash(password),
        })


    }

    //creating all the students in bulk
    static createStudentsBulk(req, res){

    }

}



export default StudentController;