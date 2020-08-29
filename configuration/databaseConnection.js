const mysql = require("mysql");

	var con = mysql.createConnection
	({
		host: "database-1.c1goupq0ythe.us-east-1.rds.amazonaws.com",
	  	user: "root",
		password: "rahulpandey",
		port :3306,
	  	database: "certificategenerator"

	});

	con.connect(function(err){
      if (err) throw err;
      console.log("Connected!");
   });

module.exports= con ; 	
