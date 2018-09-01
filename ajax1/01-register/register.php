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
            header("refresh:10;url=register.html");
        }else{
            $str = '恭喜，名字可用！';
            echo $str;
            header("refresh:2;url=register.html");
        }
    }
?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./form.css">
    <title>Document</title>
</head>
<body>
    <form action="./register.php" method="post">     
        <span id="msg">aaa</span>  
        用户名：<input type="text" name="username" >
        昵称：<input type="text" name="nickname" >
        密码： <input type="password" name="password" >   
        <input type="submit" value="注册">
    </form>
</body>
</html> -->
