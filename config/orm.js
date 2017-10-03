var connection = require('./connection.js');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT  id, burger_name, devoured FROM " + tableInput + ";";
		connection.query(queryString, function(err, results) {
			if (err) throw err;
			cb(results);
		});
	},

	insertOne: function(burgerName, cb) {
		var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
		connection.query(queryString, [burgerName], function(err, results) {
			if (err) throw err;
			cb(results);
		});
	},

	updateOne: function(trueOrFalse, userId, cb) {
		var queryString = "UPDATE burgers SET " + objToSql(trueOrFalse) + " WHERE " + userId;
		connection.query(queryString, function(err, results) {
			if (err) throw err;
			cb(results);
		})
	}
}

module.exports = orm;