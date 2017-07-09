<?php
    header('Content-Type:text/html; charset=utf-8');

    $arr= array('我','爱','北','京');
   //count用来计算数组长度
    $len = count($arr);
    for($i=0;$i<$len;$i++){
     echo $arr[$i];
    }
    }




    //关联数组

    $arr1 = array('name'=>'yft','age'=>'25');
    foreach($arr1 as $key=>$val){
    echo 'key=>' .$key .'<br/>';
    echo 'val=> . $val'.'<br/>';
    }
?>