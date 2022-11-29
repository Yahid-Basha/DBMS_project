<?php
// connext to database
$con = new mysqli_connect("localhost","root","","company_a");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
// get data from form
$employeeid = $_POST['employeeid'];

// query to database
$sql = "SELECT * FROM employee WHERE SSN = '$employeeid' ";

// check if the employee id is in the database
if(mysqli_num_rows($result) == 0)
{
    echo "Employee ID not found";
}
else
{
    echo "Login Successful";
}
?>