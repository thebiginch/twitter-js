var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();

  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  //res.sendFile('/Users/ZRL/FullStack/workshops/twitter-js/public/stylesheets/style.css');
});

// router.get('/stylesheets/style.css',function(req,res){
// 	res.sendFile('/Users/ZRL/FullStack/workshops/twitter-js/public/stylesheets/style.css');	
// });



module.exports = router;