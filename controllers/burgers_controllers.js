var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	burger.all(function(data) {
		var hbsObj = {
			burgers: data
		};
		res.render('index', hbsObj);
	});
});

router.post('/api/burgers', function(req, res) {
	burger.create([req.body.name], function(data) {
	});
});

router.put('/api/burgers/:id', function(req, res) {
	var id = "id = " + req.params.id;

	burger.update(req.body, id, function(data) {
	})
})

module.exports = router;






