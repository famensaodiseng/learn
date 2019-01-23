<?php
ob_start();
    if(isset($_COOKIE["username"])){
        echo "你曾经来过，欢迎回来";
    } else {
        echo "你是第一次来吧";
        setcookie("username","jack",time()+10);
        //设置永久cookie
    setcookie("username", "jack", PHP_INT_MAX,"/PHP4/cookid.php");
    }
   
?>