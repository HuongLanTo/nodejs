var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "myusername", //example for user
	password: "mypassword"  //example for password
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	/*Create a database named "mydb:*/
	con.query("CREATE DATABASE mydb", function(err, result) {
		if (err) throw err;
		console.log("Database created");
	});
});