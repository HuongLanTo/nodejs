var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "localhost",
	user: "myusername", //example for user
	password: "mypassword",  //example for password
	database: "mydb"
});

con.connect(function(err) {
	if (err) throw err;
	con.query("SELECT * FROM customers", function(err, result, fields) {
		if (err) throw err;
		//Return the fields object:
		console.log(fields);
		console.log("The name of the second field: " + fields[1].name);
	});
});