const mysql = require('mysql');
const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'codetest'
});

con.connect(function(err) {
	if (err) throw err;
});

module.exports = con;