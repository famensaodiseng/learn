<?php 

	//删除操作
	//1 在list页面设置a的操作

	//2 接收id参数,并检测
	if(isset($_GET['id'])){
		$id = $_GET['id'];


		//3 获取json文件内的数据并进行处理
		$datas_arr = json_decode(file_get_contents('./storage.json'), true);
		print_r($datas_arr);

		//4 根据id检测需要删除的数据
		// 肯定不能根据id-1的方式删除元素
		foreach($datas_arr as $key => $value){
			//$value是每一个实际数据保存的数据
			//需要比较$value['id'] 与 $id的关系
			if($value['id'] === $id){
				
				//删除掉找到的元素
				//参数1，要删除内部元素的数组
				//参数2，删除的起始位置索引值
				//参数3，删除的个数
				array_splice($datas_arr, $key, 1);

				break;
			}
		}

		//5 将处理完的数组转换为JSON后，写入到文件中即可
		//  不需要处理覆盖的问题，就是要进行覆盖
		file_put_contents('./storage.json', json_encode($datas_arr));

		//6 跳回到列表页
		header('Location:./list.php');

	}
 ?>