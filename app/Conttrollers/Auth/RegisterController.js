
import Controller from '../../../vendor/Controller';

class RegisterController extends Controller{


    static index(req, res){
        return res.render('auth/register');
    }

}

export default RegisterController