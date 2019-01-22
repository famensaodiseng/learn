<?php
    $data = file_get_contents("./music.json");

    //echo $data;

    //将读取的数据转化成我们需要的格式

    // json_decode:可以将json格式的字符串转化成php的数组或者对象。
    // json_encode:可以将php数组或者对象转化成json格式的字符串。
    $arr = json_decode($data,true);
    //方法第二个参数的作用是缺人转化的数据格式，默认转为对象。
    
    print_r($arr);
?>