var express = require('express');
var chalk = require('chalk');
var app = express();
var swig = require('swig');
swig.setDefaults({ cache: false });
var people = [{name: 'Gandalf'},
			{name: 'Frodo'},
			{name: 'Hermione'}];
var routes = require('./routes');

app.use('/',routes);
app.use(express.static('public'));


var verb = chalk.green;
var path = chalk.blue;
var error = chalk.bold.red;

app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views', __dirname+'/views');

// app.use(function(req,res,next){

// });

// app.use(function(req,res,next){

// });



// app.use(function(req,res,next){
// 	res.render('index',{
// 		title: 'An Example',
// 		people: people
// 	})
// });



app.listen(3000,function(){
	console.log('Listening on port 3000');
})