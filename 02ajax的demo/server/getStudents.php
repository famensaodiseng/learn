<?php 
    $arr = array();
    $arr[0] = array("name"=>"张三","age"=>"19","sex"=>"男");
    $arr[1] = array("name"=>"李四","age"=>"23","sex"=>"男");
    $arr[2] = array("name"=>"王五","age"=>"30","sex"=>"女");

    echo json_encode($arr);
 ?>
