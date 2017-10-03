var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		password: 'hacktheplanet',
		user: 'root',
		database: 'todoagain_db'
	});
};

connection.connect(function(err) {
	if (err) {
		console.error(`error connecting: ${err}`);
		return;
	}
	console.log(`connected ad id ${connection.threadId}`);
});

module.exports = connection;