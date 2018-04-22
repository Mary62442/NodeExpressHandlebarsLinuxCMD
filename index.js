var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bp = require('body-parser');
var request = require('request');

var app = express();

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Custom-Auth-Step1, Custom-Auth-Step2, Custom-Auth-Step3, Custom-Auth-Step4');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {res.sendStatus(200); }
    else { next(); }
}

app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, '/static')));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
	res.render('home');
});

app.get('/newquote', (req,res) => {
	request.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', (err,response,body) => {

	let quote = JSON.parse(body)[0].content;
	let quoter = JSON.parse(body)[0].title;
	res.send({quote:quote, quoter:quoter});

	})
});

app.get('/about', (req,res) => {
	res.render('about');
});


app.get('/datavis', (req,res) => {

	request.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', (err,response,body) => {

		let quote = JSON.parse(body)[0].content;
		let quoter = JSON.parse(body)[0].title;

		request.get('https://www.googleapis.com/books/v1/volumes/WwkjDgAAQBAJ', (err, response, body) => {
			var theWaves = JSON.parse(body).volumeInfo;

			res.render('datavis', {quote:quote, quoter:quoter, waves:theWaves});
		});	
	});	
});

app.listen(3000);
