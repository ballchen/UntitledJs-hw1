var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:filename', function(req, res) {
  var filename = req.params.filename;
  res.render("partials/" + filename, {title:"Express"});
});

module.exports = router;