var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  var tweets = tweetBank.list();

  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  //res.sendFile('/Users/ZRL/FullStack/workshops/twitter-js/public/stylesheets/style.css');
});

router.get('/users/:name',function(req,res){

	//res.send(req.params.name);

	var tweets = tweetBank.find(['name',req.params.name]);
	console.log(tweets);
	res.render('index', { title: 'Twitter.js', tweets: tweets } )

});

// router.get('/stylesheets/style.css',function(req,res){
// 	res.sendFile('/Users/ZRL/FullStack/workshops/twitter-js/public/stylesheets/style.css');	
// });



module.exports = router;