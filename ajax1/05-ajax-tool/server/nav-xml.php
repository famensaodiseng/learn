<?php
    // 默认返回数据的类型
    // header("Content-Type:text/html;charset=utf-8");

    // 如果需要返回数据为xml,那么标准的响应头的写法应该是
    header("Content-Type:application/xml;charset=utf-8");

    echo file_get_contents("../data/nav.xml");
?>