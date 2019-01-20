<?php
    // 1.读取文件内容
    $str = file_get_contents("fruit.txt");
    // echo $str;
    // 2.将文件内容转换为我们的数组格式
    // (
    //     [0] => img/pineapple1.jpg|菠萝123
    //     [1] => img/pineapple1.jpg|菠萝
    // )
    $arr = explode("\n",$str);
    foreach($arr as $value){
        // 如果以名称[] = 值的方式创建数组
        // 1.如果数组不存在，则先创建数组再添加元素
        // 2。如果数组存在，则直接将元素添加到数组
        $result[] = explode("|",$value);
    }
    // 3.遍历数组生成我们需要的结构
    foreach($result as $value){ ?>
        <li>
            <img src="<?php echo $value[1] ?>" alt="">
            <a href="#"><?php echo $value[2] ?></a>
        </li>
    <?php }
?>