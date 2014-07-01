var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('dcard',{title: "dcard"});
});

router.get('/reddit', function(req, res) {
	var rurl = 'http://www.reddit.com/.json?limit=10';
	request.get(rurl, function(err, response, body){
		
		res.send(body);
	})

});
router.get('/reddit/:after', function(req,res){
	var raurl = 'http://www.reddit.com/.json?limit=10&after='+req.params.after;
	request.get(raurl, function(err, response, body){
		res.send(body);
	})
})

router.get('/dcard/:page', function(req, res) {
	var url = 'https://www.dcard.tw/api/forum/all/'+req.params.page+'/'

	request.get(url, function(err, response, body){
		JSON.parse = body;
		res.send(body);
	})
  
});

module.exports = router;
