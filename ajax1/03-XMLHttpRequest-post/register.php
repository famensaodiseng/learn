<?php 
    header('content-type:text/html;charset=utf-8');
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        //获取用户名
        $name=$_POST['username'];
        //判断数据库中是否已有这个用户名
        $names=['jack','rose','tom','lili'];
        //有则注册失败，否则成功
        if(in_array($name,$names)){
            $str = '这个名字太火了，换一个吧！';
            echo $str;
        }else{
            $str = '恭喜，名字可用！';
            echo $str;
        }
    }
?>
