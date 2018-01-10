<?php

/**
 * @Author: yangfangtao
 * @Date:   2018-01-10 21:14:31
 * @Last Modified by:   yangfangtao
 * @Last Modified time: 2018-01-10 21:21:21
 */


	$username =	$_GET['username'];
	$password =	$_GET['password'];

	if($username == 'admin' && $password = '123') {
		echo '登陆成功';
	} else {
		echo '登陆失败';
	}



?>