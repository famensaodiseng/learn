<?php

    header('Content-type:text/html;charset=utf-8');

    $conn = mysqli_connect("localhost","root","root","demo");

    if (!$conn) {
        '连接失败';
    }
    // $sql = "insert  into mytable values(null,'吴彦祖','32','男')";

   //$sql = "update mytable set name='哈哈' where id = 2";
   //$sql = "delete from mytable where    id = 3";
   $sql = "select * from mytable";

   $res = mysqli_query($conn,$sql);
   var_dump($res);
   if ($res){
       echo "查询成功";
   } else {
       echo "查询失败";
   }
?>