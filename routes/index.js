var express = require('express');
var router = express.Router();

const wiki = require('./wiki');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.redirect('/catalog');
});

module.exports = router;
