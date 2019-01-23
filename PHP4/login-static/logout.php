<?php 
	// 删除cookie值一定要去关注cookie是如何添加的
	// setcookie("isLogin","");
	session_start();
	unset($_SESSION["user"]);
	header("Location:./login.php");
 ?>