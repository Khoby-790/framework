import Controller from '../../vendor/Controller';
import Models from '../Models';
const User = Models.User;
const Student = Models.Student;
const StudentParent = Models.StudentParent;

const DEFAULT_PASSWORD = '0123456';

class StudentController extends Controller {


    //registerign a student
    static createStduent(req,res){
        User.create({
            name : req.body.first_name + ' ' + req.body.last_name,
            email : req.body.email,
            password: super.hash(DEFAULT_PASSWORD),
        }).then(user =>{
            //console.log(user);
            Student.create({
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                dob: req.body.dob,
                admission_id: req.body.admission_id,
                roll: req.body.roll,
                class: req.body.class,
                section: req.body.section,
                blood_group: req.body.blood_group,
                religion: req.body.religion,
                short_bio: req.body.short_bio,
                contact: req.body.contact,
                user_id: user.id,
                student_avatar: req.body.student_avatar,
                gender: req.body.gender,
            }).then(student =>{
                console.log(student);
                res.redirect('back');
            })
        })


    }

    //creating all the students in bulk
    static createStudentsBulk(req, res){
       const stds = super.getRowsFromFile(__basedir + '../public/upload' + req.file.filename);
       User.create(stds).then(users =>{
           if(users){
               console.log(users);
               res.redirect('back');
           }
       });
    }

}



export default StudentController;