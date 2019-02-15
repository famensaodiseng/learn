<?php 
    // 链接数据库的封装
    function connect(){
    $connect = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);

    return $connect;
    }
    // 执行查询的封装
    function query($connect,$sql)
    {
    $result = mysqli_query($connect, $sql);
    // return $result;
    return fetch($result);
    }
    // 转化结果集为数组
    function fetch($result){
    $arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $arr[] = $row;
    }
    return $arr;
    }


?>