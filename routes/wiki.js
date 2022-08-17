const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
	res.send('Wiki homepage');
});

router.get('/about', function (req, res) {
	res.send('About this Wiki');
});

module.exports = router;
