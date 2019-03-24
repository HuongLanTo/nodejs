var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "localhost",
	user: "root", //example for user
	password: "",  //example for password
	database: "mydb" 
});

con.connect(function(err) {
	if (err) throw err;
	//Delete all customers with the address "Highway 37":
	var sql = "DELETE FROM customers WHERE address = 'Highway 37'";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Number of records deleted: " + result.affectedRows);
	});
});

