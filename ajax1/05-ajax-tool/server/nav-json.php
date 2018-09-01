<?php
    // 如果需要返回数据为json,那么标准的响应头的写法应该是
    header("Content-Type:application/json;charset=utf-8");
    echo file_get_contents("../data/nav.json");
?>