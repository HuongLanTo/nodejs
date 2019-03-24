var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "localhost",
	user: "root", //example for user
	password: "",  //example for password
	database: "mydb" 
});

con.connect(function(err) {
	if (err) throw err;
	//Return the first 5 customers:
	var sql = "SELECT * FROM customers LIMIT 5";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log(result);
	});
});

