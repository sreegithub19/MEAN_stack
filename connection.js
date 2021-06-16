//MySQL code here  
const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: "127.0.0.1",
    user:"root",
    password: "sree@sql2021",
    database: "sql_store",
    //database: "Edureka",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){ console.log("Connected");}
    else console.log("Connection failed");
});

module.exports = mysqlConnection;