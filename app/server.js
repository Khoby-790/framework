import express from "express";
import webRouter from '../routes/web';
import apiRouter from '../routes/api';
import authRouter from '../routes/users';
import ejs from 'ejs';

//create instance of the app
const app = express();



//set the view engine 
app.set('view engine','ejs');

//set where to locate views folder
app.set('views',__dirname + '/../resources/views');



//middleware parser
app.use(express.json());

//bring in web routes
app.use("/",webRouter);

//bring in api routes
app.use('/api',apiRouter);

//bring in auth routes
app.use('/users',authRouter);

//set static folder
app.use('/static',express.static('../public'));


//now listen on the port for requests
app.listen(8000,(error)=>{
    if(error) throw error;
    console.log(`Server running and receiving request on port: ${8000}`)
});



export default app;