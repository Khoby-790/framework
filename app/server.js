import express from "express";
import webRouter from '../routes/web';
import apiRouter from '../routes/api';
import authRouter from '../routes/users';
import ejs from 'ejs';
import path from 'path';
import ErrorHandlers from './Config/ErrorHandlers';

//create instance of the app
const app = express();

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

//set the view engine 
app.set('view engine','ejs');
app.engine('ejs', require('express-ejs-extend'));
//set where to locate views folder
app.set('views',path.join(__dirname + '/../resources/views'));

//middleware parser
app.use(express.json());

// Global variables
app.use(function(req, res, next) {
  res.locals.user = req.user || null;
  next();
});


//bring in web routes
app.use("/",webRouter);

//bring in api routes
app.use('/api',apiRouter);

//bring in auth routes
app.use('/users',authRouter);

//set static folder
app.use('/static',express.static('../public'));

// If that above routes didnt work, we 404 them and forward to error handler
app.use(ErrorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (process.env.NODE_ENV === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(ErrorHandlers.developmentErrors);
}

// production error handler
app.use(ErrorHandlers.productionErrors);


const PORT = process.env.PORT || 5000;

//now listen on the port for requests
app.listen(PORT,(error)=>{
    if(error) throw error;
    console.log(`Server running and receiving request on port: ${PORT}`)
});


export default app;