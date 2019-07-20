import express from "express";
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
const busboyBodyParser = require('busboy-body-parser');
import flash from 'connect-flash';
import session from 'express-session';
import expressValidator from 'express-validator';
import webRouter from '../routes/web';
import apiRouter from '../routes/api';
import authRouter from '../routes/users';
import ejs from 'ejs';
import path from 'path';
import ErrorHandlers from './Config/ErrorHandlers';
import Authentication from './Config/Passport';



//create instance of the app
const app = express();
app.use(express.static('public'))

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Passport Config
require('./Config/Passport')(passport);

// const Auth = new Authentication(passport);


//set the view engine 
app.set('views','resources/views');
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine','ejs');


//set where to locate views folder

//middleware parser
app.use(express.json());

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//validates all requests
app.use(busboyBodyParser());

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.user = req.user || null;
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


//bring in web routes
app.use('/',webRouter);

//bring in api routes
app.use('/api',apiRouter);

//bring in auth routes
app.use('/users',authRouter);

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
// app.use(express.static('public'));
// console.log(path.join(path.dirname(__dirname)) + '/public');


// If that above routes didnt work, we 404 them and forward to error handler
app.use(ErrorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (process.env.NODE_ENV === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(ErrorHandlers.developmentErrors);
}

// production error handler
app.use(ErrorHandlers.productionErrors);


//start the mysql server
// require('../app/Config/DatabaseConnection');





// module.exports = app;

const PORT = process.env.PORT || 5000;



//now listen on the port for requests
app.listen(PORT,(error)=>{
    if(error) throw error;
    console.log(`Server running and receiving request on port: ${PORT}`)
});