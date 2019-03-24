var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "localhost",
	user: "root", //example for user
	password: "",  //example for password
	database: "mydb" 
});

con.connect(function(err) {
	if (err) throw err;
	//Return 5 customers, starting from position 2:
	var sql = "SELECT * FROM customers LIMIT 2, 5";
	//The number are reversed "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log(result);
	});
});

