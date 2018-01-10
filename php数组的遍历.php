<?php

/**
 * @Author: yangfangtao
 * @Date:   2018-01-10 21:00:07
 * @Last Modified by:   yangfangtao
 * @Last Modified time: 2018-01-10 21:07:56
 */
$arr = array("zhangsan","lisi","wangwu");
	for($i = 0;$i<count($arr);$i++){
		$temp=$arr[$i];
		echo $temp."<br>";
	}




	$arr = array("name1"=>"zhangsan","name2"=>"lisi","name3"=>"wangwu");
	foreach($arr as $key  => $value){
		echo $key.">>>".$value."<br>";
	}
?>