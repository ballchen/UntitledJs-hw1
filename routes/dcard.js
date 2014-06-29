var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res) {
  

  res.render('dcard',{title: "dcard"});
});

module.exports = router;
