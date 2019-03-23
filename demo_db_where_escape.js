var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "myusername", //example for user
    password: "mypassword",  //example for password
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var adr = 'Mountain 21';
    /*Escape the address value:*/
    var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});
