import bcrypt from 'bcryptjs';
const readXlsxFile = require('read-excel-file/node');

class Controller {
 
   static hash(word){
       let newHash;
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(word,salt,(err,hash)=>{
                if(err) throw err;
                newHash = hash;
            });
        });

        return newHash;
    }

    static getRowsFromFile(filepath){
        let dataRows = [];
        readXlsxFile(filepath).then((rows) => {
            rows.shift();
            dataRows = rows;
        })

        return dataRows;
    }

}


export default Controller