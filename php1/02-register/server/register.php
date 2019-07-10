<?php
    $name = $_POST['name'];
    $pass = $_POST['pass'];
    $mobile = $_POST['mobile'];
    /*创建需要进行存储的当前用户注册对象*/
    $obj = array(
        'name' => $name,
        'pass' => $pass,
        "mobile" => $mobile
    );
    /*php无法直接将一个数据存储到文件，它需要先将数据写入到数组，再将数组写入到文件*/
    $arr = file_get_contents('data.json'); //字符串
    $dataArr = json_decode($arr); //将json格式字符串转换为php数组
    /*向数组中添加数据*/
    $dataArr[] = $obj;
    /*将数据写入到文件，写入到文件的数据只能是字符串*/
    $resultStr = json_encode($dataArr); //将数组转换为json格式字符串
    file_put_contents('data.json',$resultStr);
    
    echo json_encode(array('code'=>1,"msg"=>'注册成功'));
?>