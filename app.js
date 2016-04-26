var express = require('express');
var chalk = require('chalk');
var app = express();

var verb = chalk.green;
var path = chalk.blue;
var error = chalk.bold.red;

app.use(function(req,res,next){

	console.log(verb(req.method), res.statusCode, path(req.path));

	next();
});

app.use('/special',function(req,res,next){
	console.log('You reached the special area');
	next();
});



app.use(function(req,res,next){

	//console.log(res.statusCode);
	res.send();
});



app.listen(3000,function(){
	console.log('Listening on port 3000');
})