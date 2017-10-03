var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	password: 'root',
	user: 'root',
	database: 'burgers_db'
});

connection.connect(function(err) {
	if (err) {
		console.error(`error connecting: ${err}`);
		return;
	}
	console.log(`connected ad id ${connection.threadId}`);
});

module.exports = connection;