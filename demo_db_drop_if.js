var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "localhost",
	user: "root", //example for user
	password: "",  //example for password
	database: "mydb" 
});

con.connect(function(err) {
	if (err) throw err;
	/*Delete the "employess" table, but only if it already exist (to avoid errors):*/
	var sql = "DROP TABLE IF EXISTS employess";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log(result);
		console.log("The warningCount property in the result is set to 1 if the table does not exist.")
	});
});

