
import User from '../../Models/User';
import Controller from '../../../vendor/Controller';

class RegisterController extends Controller{


    static index(req, res){
        return res.render('auth/register');
    }

    static create(req, res){
       let user = User.create(req.body);

        res.json({ user : user });
    }

}

export default RegisterController