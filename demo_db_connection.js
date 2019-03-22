var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "myusername", //example for user
	password: "mypassword"  //example for password
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});