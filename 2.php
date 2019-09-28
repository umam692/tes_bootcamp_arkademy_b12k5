<?php 

function is_username_valid($user)
{
	$match_username = "/^[a-zA-Z]{6}$/";
	
	if (preg_match($match_username, $user)) {
		// return true;
		echo "TRUE";
	}else{
		// return false;
		echo "FALSE";
	}
}

function is_password_valid($pass)
{
	$match_password = "/^(?=.*[7])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#\$%\^&\*]){5,10}/";

	if (preg_match($match_password, $pass)) {
		// return true;
		echo "TRUE";
	}else{
		// return false;
		echo "FALSE";
	}
}

 echo is_username_valid('coba12');
 echo "<br>";
 
 echo is_username_valid('devina');
 echo "<br>";
	
 echo is_password_valid('p@ssW0rd9');
 echo "<br>";

 echo is_password_valid('7Ark@demi');
 echo "<br>";




 ?>