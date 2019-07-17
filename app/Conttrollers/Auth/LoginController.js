
import Controller from '../../../vendor/Controller';


class LoginController extends Controller {


    static index(req, res){
        res.render('auth/login');
    }

}



export default LoginController