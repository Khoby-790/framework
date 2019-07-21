import models  from '../Models/index';
const User = models.User

class HomeController {
    static index(req, res){
        res.render('index',{
        	title:'Home'
        });
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

    static add_student_parent(req, res){
        res.render('School/Student/add_parent',{
            title:"Add Student's Parent"
        })
    }

}


export default HomeController;