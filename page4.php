<?php

/**
 * @Author: yangfangtao
 * @Date:   2018-01-10 19:34:43
 * @Last Modified by:   yangfangtao
 * @Last Modified time: 2018-01-10 19:41:24


 PHp 的数组使用
 */

	$arr = array();
	$arr[0] = 'zhangsan';
	$arr[1] = 'lisi';
	$arr[2] = 'wangwu';
	$arr[3] = 'zhaoliu';

	echo $arr[0];

	// echo不能输出复杂的数据类型
	echo $arr[1];

	print_r($arr);
echo "<br>";
	var_dump($arr);

?>