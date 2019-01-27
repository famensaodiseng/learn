<?php

    header('Content-Type:text/html;charset=utf-8');

    // 1.连接数据库
    $conn = mysqli_connect("localhost","root","root","demo");

    if(!$conn){
        die('连接失败');
    }
    // 2.准备sql语句（增删改查)外层写双引号，里面字符串写单引号引起来
    $sql= "insert into mytable values(null,'杨方涛','19','男')";
    // 执行sql语句  mysqli_query(连接对象,sql语句) 失败返回false,成功返回true
    $res=mysqli_query($conn,$sql);
    if ($res) {
        echo "添加成功";
    } 
    else {
        echo "添加失败";
    }
    // 判断结果显示、








    // $conn = mysqli_connect("localhost","root","root","demo");
    // //链接失败就返回false .成功就返回一个对象.
    // var_dump($conn);

    // mysqli_set_charset($conn,"utf-8");


    // if(!$conn) {
    //     // echo "连接成功";
    //     die("连接失败");
    // } else {
    //     echo "连接成功";
    // }

?>