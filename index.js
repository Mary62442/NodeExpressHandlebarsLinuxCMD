var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, '/static')));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.get('/', (req,res) => {

	res.render('home');
});

app.get('/about', (req,res) => {
	res.render('about', {about:'this is mvburlando.cloud about page'});
});

app.listen(3000);
