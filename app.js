require("babel-core/register");
require("babel-polyfill");
const app = require('./app/server');
// require('./routes/web');





const PORT = process.env.PORT || 5000;

//now listen on the port for requests
app.listen(PORT,(error)=>{
    if(error) throw error;
    console.log(`Server running and receiving request on port: ${PORT}`)
});