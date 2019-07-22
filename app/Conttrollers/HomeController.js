import models  from '../Models/index';
const User = models.User;
const Student = models.Student;

class HomeController {
    static index(req, res){
        Student.findAll().then(users =>{
            res.render('index',{
                title:'Home',
                students: users
            });
        })
    }

    static create(req, res){
        User.create(req.body).then(user =>{
            res.json({body: user})
        })
    }

    static add_student(req, res){
        res.render('School/Student/add_student',{
            title:'Add Student'
        })
    }

    static add_students_from_file(req, res){
        res.render('School/Student/add_students_from_file',{
            title:'Add Students'
        })
    }

    static add_student_parent(req, res){
        res.render('School/Student/add_parent',{
            title:"Add Student's Parent"
        })
    }

}


export default HomeController;