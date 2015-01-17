var express = require('express');
var model = require('./model.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('user index');
});

module.exports = router;
