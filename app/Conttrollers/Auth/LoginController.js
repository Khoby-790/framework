import Controller from '../../../vendor/Controller';
import passport from 'passport';


class LoginController extends Controller {
    static index(req, res){
        res.render('auth/login');
 	}
    	

    static rememberMe(req, res, next){
    	if (req.body.remember) {
		  req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
		} else {
		  req.session.cookie.expires = false; // Cookie expires at end of session
		}
		next();
    }

    static loginRedirect(req, res){
    	let path = req.session.redirect_to;
    	delete req.session.redirect_to;
    	res.redirect(path || '/');
    }

    static logout(req, res){
    	req.logout();
    	res.redirect('/users/login');
    }

}



export default LoginController