import bcrypt from 'bcryptjs';
import { body } from 'express-validator/check';

class Controller {
 
    hash(word){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(word,salt,(err,hash)=>{
                if(err) throw err;
                return hash;
            }).catch(err => console.log(err));
        });
    }

}


export default Controller