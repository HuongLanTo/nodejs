var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "localhost",
	user: "root", //example for user
	password: "",  //example for password
	database: "mydb" 
});

con.connect(function(err) {
	if (err) throw err;
	//Delete the "employess" table:
	var sql = "DROP TABLE employess";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Table deleted");
	});
});

