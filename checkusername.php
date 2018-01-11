<?php

/**
 * @Author: yangfangtao
 * @Date:   2018-01-11 03:08:54
 * @Last Modified by:   yangfangtao
 * @Last Modified time: 2018-01-11 03:48:12
 */
	$uname = $_GET["username"];
	//按照道理来说这个地方是要查询数据库的。
	if ($uname =="zhangsan") {
		echo '已经注册了';
	} else {
		echo "名字可以用";
	}





?>