var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets });
});

router.get('/users/:name',function(req,res){
	var tweets = tweetBank.find(['name',req.params.name]);
	console.log(tweets);
	res.render('index', { title: 'Twitter.js', tweets: tweets });
});








module.exports = router;