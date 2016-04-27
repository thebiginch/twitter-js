var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true});

});




router.post('/tweets', function(req, res) {
  console.log(req.body);

  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/users/:name',function(req,res){
	var name = req.params.name;
	//var id = req.params.id;
	var tweets = tweetBank.find({name: name });
	console.log(name);
	res.render('index', { title: 'Twitter.js by '+name, tweets: tweets, showForm: true, userName: name});
});


router.get('/tweets/:id',function(req,res){
	var id = Number(req.params.id);
	//console.log(tweetBank);
	var tweets = tweetBank.find({id: id });
	//console.log(tweets);
	res.render('index', { title: 'Twitter.js', tweets: tweets});
});



module.exports = router;