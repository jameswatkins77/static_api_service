var express = require('express');
var router = express.Router();
var data = require('../lib/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.json(data);
});

router.get('/activeusers', function(req, res, next) {
  res.json(data);
});

router.get('/userprofile', function(req, res, next) {
  res.json(data);
});

module.exports = router;
