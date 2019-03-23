var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "localhost",
	user: "myusername", //example for user
	password: "mypassword",  //example for password
	database: "mydb" 
});

con.connect(function(err) {
	if (err) throw err;
	//Select all customers and return the result object:
	con.query("SELECT * FROM customers", function(err, result, fields) {
		if (err) throw err;
		console.log(result);
		console.log("The address of the third record: " + result[2].address);
	});
});