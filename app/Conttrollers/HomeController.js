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
}


export default HomeController;