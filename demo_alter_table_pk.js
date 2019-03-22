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
	//Add primary key to an existing table named "customers":
	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});