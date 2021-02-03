const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);


//YOU HAVE ABILTY TO MAKE ROUTES


//Middlewares
//function that execute when browser is being hit
//Mongo db url
mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})



mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!!!');
})



//ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home!');
});


//How to we start listening to the server
app.listen(3000);
