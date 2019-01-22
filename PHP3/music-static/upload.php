<?php 
	/*
		步骤分析：
	 		1 静态页面处理
	 			- 将html文件修改为php文件
				- 设置form的action、method、enctype
				- 设置表单元素的name属性
				- 确认相关结构

	 		2 检测表单是否完整提交

	 		3 设置错误展示

	 		4 进行数据保存
	 */

	function test_params () {

		//注意与前面表单检测的区别：
		// 每次有一个表单元素没有填写，需要添加一个标记
		// 页面中再根据标记进行错误提示(类名修改)

		if(!isset($_POST['title']) || trim($_POST['title']) === ''){
			$error_arr[] = 'title';
		}

		if(!isset($_POST['geshou']) || trim($_POST['geshou']) === ''){
			$error_arr[] = 'geshou';
		}

		if(!isset($_POST['zhuanji']) || trim($_POST['zhuanji']) === ''){
			$error_arr[] = 'zhuanji';
		}

		if(!isset($_FILES['source']) || $_FILES['source']['error'] !== 0){
			$error_arr[] = 'source';
		}

		//检测是否有某个表单项没有添加完毕
		if (isset($error_arr) && count($error_arr) !== 0) {
			//存在没有填写的表单元素，跳出即可
			$GLOBALS['error_arr'] = $error_arr;
			return;
		}else{
			//无论是否具有错误信息，都设置为全局变量让页面中访问
			$GLOBALS['error_arr'] = [];
		}	


		//后续的数据保存等处理
		//获取json文件中的数据内容，然后进行数组转换
		$datas_arr = json_decode(file_get_contents('./storage.json'), true);

		//将数据保存在json数组中，文件保存的是地址，但是还要进行单独的移动操作
		move_uploaded_file($_FILES['source']['tmp_name'], './upload/' . $_FILES['source']['name']);
		//将文件的路径保存到json中时，为了避免路径不同的问题，推荐使用绝对路径

		//uniqid() 可以生成一个随机的字符串，作为id名使用
		$datas_arr[] = array(
			"id" => uniqid(),
   		"title" => $_POST['title'],
   		"geshou" => $_POST['geshou'],
   		"zhuanji" => $_POST['zhuanji'],
   		"source" => "/day4/music-static/upload/" . $_FILES['source']['name']
		);

		//写入到文件中
		file_put_contents('./storage.json', json_encode($datas_arr));

		//上传完毕后，跳转到列表页即可
		// header('Location:list.php');
		echo '<script>location="list.php";</script>';
	}

	//检测请求方式：	
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		test_params();
	}else{
		//为了GET请求时不出现报错，设置的一个变量
		$error_arr = [];
	}
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="bootstrap.css">
</head>
<body>
	<div class="container">
		<h1 class=" display-3 py-3">音乐上传</h1>
		<hr>
		<!-- 表单结构： -->
		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">
			<div class="form-group">
				<label for="title">标题</label>
				<!-- 下面的所有 is-invalid 均为要判断的类名 -->
				<!-- 标题输入框是否需要添加is-invalid类名，需要取决于$error_arr中是否含有'title'这个值 -->
				<?php 
					//参数1 要检索的元素值。参数2，要进行检索的数组
					$title = in_array('title', $error_arr) ? 'is-invalid' : '';
					$geshou = in_array('geshou', $error_arr) ? 'is-invalid' : '';
					$zhuanji = in_array('zhuanji', $error_arr) ? 'is-invalid' : '';
					$source = in_array('source', $error_arr) ? 'is-invalid' : '';
				 ?>
				<input type="text" class="form-control <?php echo $title; ?>" id="title" name="title">
				<small class="invalid-feedback">请输入标题</small>
			</div>
			<div class="form-group">
				<label for="geshou">歌手</label>
				<input type="text" class="form-control <?php echo $geshou; ?>" id="geshou" name="geshou">
				<small class="invalid-feedback">请输入歌手的名称</small>
			</div>
			<div class="form-group">
				<label for="zhuanji">专辑</label>
				<input type="text" class="form-control <?php echo $zhuanji; ?>" id="zhuanji" name="zhuanji">
				<small class="invalid-feedback">请输入专辑名称</small>
			</div>
			<div class="form-group">
				<label for="source">资源文件</label>
				<!-- accept 用于设置可以接受的文件类型，可以使用MIMEtype,也可以使用后缀名，使用逗号连接 -->
				<input type="file" class="form-control <?php echo $source; ?>" id="source" name="source" accept=".mp3,.png">
				<small class="invalid-feedback">请上传文件</small>
			</div>
			<button class="btn btn-primary btn-block">提交</button>
		</form>
	</div>
</body>
</html>