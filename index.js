var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bp = require('body-parser');
var request = require('request');

var app = express();
app.use(express.static(path.join(__dirname, '/static')));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.get('/', (req,res) => {
	res.render('home');
});

app.get('/about', (req,res) => {
	res.render('about');
});

app.listen(3000);
