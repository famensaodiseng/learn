<?php 
		//编辑功能可以分为两个部分：
		//1 通过按钮点击跳转到编辑页面，获取对应数据显示在输入框中（GET请求）
		//2 点击提交按钮，检索数据是否填写完整，并进行数据修改（POST请求）

		function test_params () {
			//检测表单是否填写完毕
			if(!isset($_POST['title']) || trim($_POST['title']) === ''){
				$error_arr[] = 'title';
			}

			if(!isset($_POST['geshou']) || trim($_POST['geshou']) === ''){
				$error_arr[] = 'geshou';
			}

			if(!isset($_POST['zhuanji']) || trim($_POST['zhuanji']) === ''){
				$error_arr[] = 'zhuanji';
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
			if(!empty($_FILES) && $_FILES["source"]["error"] == 0){
				$newName = './upload/' . $_FILES['source']['name'];
				move_uploaded_file($_FILES['source']['tmp_name'], $newName);
			}

			
			//找到要删除的数据后再操作
			// --- 在表单action属性中拼接?id= 参数，即可在提交后得到需要处理的id
			// 注意：$_GET 获取方式在GET与POST请求时均可使用，用于获取地址栏中的参数。
			$id = $_GET['id'];

			//根据得到的id进行数据查找
			foreach ($datas_arr as $key => $values) {
				if($values['id'] === $id){
					//找到对应的数据后不能直接对$values进行设置
					//原因为$values是真实数据的副本，修改副本是无效的，需要根据$key找到真正的数据再进行修改
					//$datas_arr[$key]['title'] = '张三666';
					$datas_arr[$key]["title"] = $_POST['title'];
					$datas_arr[$key]["geshou"] = $_POST['geshou'];
					$datas_arr[$key]["zhuanji"] = $_POST['zhuanji'];
					if(isset($newName)){
						$datas_arr[$key]["source"] = "/day4/music-static/upload/" . $_FILES['source']['name'];
					}
					break;
				}
			}
			//var_dump($datas_arr);

			//写入到文件中
			file_put_contents('./storage.json', json_encode($datas_arr));

			//上传完毕后，跳转到列表页即可
			header('Location:list.php');
		}

		if ($_SERVER['REQUEST_METHOD'] === 'GET') {
			//为了GET请求时不出现报错，设置的一个变量
			$error_arr = [];

			if (isset($_GET['id'])) {
				//保存传递的id参数
				$id = $_GET['id'];
	
				//获取json文件中的字符串，并进行处理
				$datas_arr = json_decode(file_get_contents('./storage.json'), true);
	
				//遍历$datas_arr
				foreach ($datas_arr as $key => $value) {
					//如果id相同，当前$value就是我们需要使用的值，设置break
					if ($value['id'] === $id) {
						$data = $value;
						break;
					}
				}
			}
		} else if($_SERVER['REQUEST_METHOD'] === 'POST') {
			test_params();
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
		<h1 class="display-3 py-3">音乐编辑</h1>
		<hr>
		<!-- 表单结构： -->

		<!-- 下面提交表单的位置需要设置id参数，两种书写方式均可 -->
		<!-- <form action="<?php //echo $_SERVER['PHP_SELF'] . '?id=' . $id; ?>" method="POST" enctype="multipart/form-data"> -->
			<form action="<?php echo $_SERVER['PHP_SELF']; ?>?id=<?php echo $id; ?>" method="POST" enctype="multipart/form-data">
			<div class="form-group">
				<label for="title">标题</label>
				<!-- 下面的所有 is-invalid 均为要判断的类名 -->
				<?php 
					//参数1 要检索的元素值。参数2，要进行检索的数组
					$title = in_array('title', $error_arr) ? 'is-invalid' : '';
					$geshou = in_array('geshou', $error_arr) ? 'is-invalid' : '';
					$zhuanji = in_array('zhuanji', $error_arr) ? 'is-invalid' : '';
					$source = in_array('source', $error_arr) ? 'is-invalid' : '';
				 ?>
				<input type="text" class="form-control <?php echo $title; ?>" id="title" name="title" value="<?php echo $data['title']; ?>">
				<small class="invalid-feedback">这是一个标题</small>
			</div>
			<div class="form-group">
				<label for="geshou">歌手</label>
				<input type="text" class="form-control <?php echo $geshou; ?>" id="geshou" name="geshou"  value="<?php echo $data['geshou']; ?>">
				<small class="invalid-feedback">歌手的名称</small>
			</div>
			<div class="form-group">
				<label for="zhuanji">专辑</label>
				<input type="text" class="form-control <?php echo $zhuanji; ?>" id="zhuanji" name="zhuanji"  value="<?php echo $data['zhuanji']; ?>">
				<small class="invalid-feedback">专辑名称</small>
			</div>
			<div class="form-group">
				<label for="source">资源文件</label>
				<!-- accept 用于设置可以接受的文件类型，可以使用MIMEtype,也可以使用后缀名，使用逗号连接 -->
				<input type="file" class="form-control <?php echo $source; ?>" id="source" name="source" accept=".mp3,.png">
				<small class="invalid-feedback">文件上传</small>
			</div>
			<button class="btn btn-primary btn-block">上传</button>
		</form>
	</div>
</body>
</html>