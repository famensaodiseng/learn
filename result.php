<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>学生成绩结果</title>
	<style type="text/css">
	ul{
		list-style: none; 
		color:green;
	}
	.title {
		font-size: 20px; 
		font-weight: "微软雅黑";  
		color:red;
	}
</style>
</head>
<body>
	

	<?php 
		//准备一个模拟数据

	$data = array();
	$data["123"] = array("name"=>"张三","chinese"=>"123","math"=>"213","English"=>"22");
	$data["456"] = array("name"=>"李四","chinese"=>"13","math"=>"23","English"=>"29");
	$data["789"] = array("name"=>"王五","chinese"=>"43","math"=>"83","English"=>"83");

		$code = $_GET["code"];
		//查询数据库
		
	?>

	<?php 
	if(array_key_exists($code,$data)) {
	$result = $data[$code];
	


	?>
	<div> 
		<div class="title"><?php echo $result["name"] ?>的成绩如下</div>
		<ul>
			<li>语文:<?php echo $result["chinese"] ?>分</li>
			<li>数学:<?php echo $result["math"] ?>分</li>
			<li>英语:<?php echo $result["English"] ?>分</li>
		</ul>
	</div>	

	<?php 
	}  else {
		?>
		<div>该学生考号不存在</div>
		<?php
	}

	?>
</body>
</html>









