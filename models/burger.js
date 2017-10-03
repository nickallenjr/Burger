var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		})
	},

	create: function(burgerName, cb) {
		orm.insertOne(burgerName, function(res) {
			cb(res);
		});
	},

	update: function(trueOrFalse, userId, cb) {
		orm.updateOne(trueOrFalse, userId, function(res) {
			cb(res);
		});
	}
}

module.exports = burger;