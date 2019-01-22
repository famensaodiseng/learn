<?php 
	
	//步骤分析：
	//1 观察了一下数据的结构
	//2 进行静态页面处理
	//3 使用php读取json文件的内容并进行转换
		
	$json_str = file_get_contents('./storage.json');
	$json_arr = json_decode($json_str, true);

	//4 进行页面结构的创建并修改对应内容
	//见html中。


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
		<h1 class="text-center display-3 py-3">音乐列表</h1>
		<hr>
		<a href="./upload.php" class="btn btn-dark">新增歌曲信息</a>
		<table class="table table-bordered">
			<thead class="thead-inverse">
				<tr>
					<th>标题</th>
					<th>歌手</th>
					<th>专辑</th>
					<th>音乐</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
					<?php foreach($json_arr as $datas): ?>
					<tr>
						<td><?php echo $datas['title']; ?></td>
						<td><?php echo $datas['geshou']; ?></td>
						<td><?php echo $datas['zhuanji']; ?></td>
						<td><audio src="<?php echo $datas['source']; ?>" controls></audio></td>
						<td>
							<!-- 
								编辑功能：
									设置一个编辑按钮；
									设置href的值，并且传递id给编辑页面进行处理。
							 -->
							<a href="./edit.php?id=<?php echo $datas['id']; ?>" class="btn btn-primary">编辑</a>
							<!-- 
								删除功能：
								 需要让a标签点击后跳转到删除页面，并且使用get方式传递参数id
							 -->
							<a href="./delete.php?id=<?php echo $datas['id']; ?>" class="btn btn-danger">删除</a>
						</td>
					</tr>
					<?php endforeach; ?>
			</tbody>
		</table>
	</div>
</body>
</html>