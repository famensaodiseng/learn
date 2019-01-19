<?php

    //header('Content-Type:image/jpeg');
    // $res = file_get_contents('data.txt');
    // var_dump($res);
    //能够读取任意类型文件

    $count= file_put_contents("data.txt",'这是我写入的内容');

    echo $count;
?>