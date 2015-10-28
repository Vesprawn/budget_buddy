<?php
	$servername = "localhost";
	$username  = "standard";
	$password = "rusticmango418";
	$debtAccount = $_GET['debtID'];
	$conn = mysql_connect($servername, $username, $password);
	
	$userName = $_POST['username'];
	$email = $_POST['email'];
	
	if(!$conn) {
		die('Could not connect:' .mysql_error());
	} else { 
		insertUser($userName, $email);
	}
	
	
	
	
	// check if 
	
	function insertUser($username, $email) {
		$userID = uniqid();
		// 
		// if (!mysql_select_db('BudgetBuddy', $conn)) {
		//     echo 'Could not select database';
		//     exit;
		// }
		
		$result = mysql_query("SELECT * FROM BudgetBuddy.Users WHERE userId='".$userID."'");
		if(!$result) {
			print "error";
			die(mysql_error());
		} else {
			$numRows = mysql_num_rows($result);
			
			if($numRows == 0) {
				print "Rows: ".$numRows." Username".$username. "userID ".$userID;
				mysql_query("INSERT INTO BudgetBuddy.Users (userId, username, email) VALUES ('".$userID."', '".$username."', '".$email."')");
			} else {
				insetUser($username);
			}
		}
		
		//check data base for un
	}
?>