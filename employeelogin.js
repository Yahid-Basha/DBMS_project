// connect to mysql database and check if the employeeid exists
// if it does, then redirect to the employee page
//connect to mysql database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company',
});
connection.connect(function (error) {
    if (error) {
        console.log('Error connecting to the MySQL Database');
        return;
    }
    console.log('Connection established sucessfully');
}
);
//check if the employeeid exists
var employeeid = document.getElementById("employeeid").value;
var sql = "SELECT * FROM employee WHERE employeeid = " + employeeid;
// check if the employeeid exists
connection.query(sql, function (error, results) {
    if (error) {
        console.log('Error connecting to the MySQL Database');
        return;
    }
    if (results.length > 0) {
        // redirect to the employee page
        window.location.href = "success.html";
    }
    else {
        // display error message
        window.location.href = "error.html";
    }
});
