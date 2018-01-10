<?php

/**
 * @Author: yangfangtao
 * @Date:   2018-01-10 21:14:31
 * @Last Modified by:   yangfangtao
 * @Last Modified time: 2018-01-10 21:27:04
 */


	$username =	$_POST['username'];
	$password =	$_POST['password'];

	if($username == 'admin' && $password = '123') {
		echo '登陆成功';
	} else {
		echo '登陆失败';
	}



?>