var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "localhost",
	user: "myusername", //example for user
	password: "mypassword",  //example for password
	database: "mydb"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	/*Create a table named "employees*:*/
	var sql = "CREATE TABLE employess (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});