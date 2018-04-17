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

	request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', (err,response,body) => {

	let quote = JSON.parse(body)[0].content;
	let quoter = JSON.parse(body)[0].title;
	res.render('home', {quote:quote, quoter:quoter});

	})
	
});

app.get('/about', (req,res) => {
	res.render('about');
});

app.listen(3000);
