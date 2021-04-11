const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


app.set('view engine', 'ejs');
app.use(express.static('./public'));

//USING MIDDLEWARE
app.use(express.urlencoded({
    extended: true
}));

//Import Routes
const itemRoute = require('./routes/items');
app.use('/items', itemRoute);



//INDEX ROUTES
app.get('/', function(req, res){
    res.render('index');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, (err) => {
    if (err) throw err;
    console.log('Connect to mongoDB');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`The apps listening on ${port}`);