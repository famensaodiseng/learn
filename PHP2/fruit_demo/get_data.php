<?php
    // 1.数据如何存储--关注数据存储的格式
    // 2.如何将读取出的内容转换为数组

    // array(
    //     "src" => "img/pineapple1.jpg",
    //     "name" => "菠萝"
    // )
    // $str = "img/pineapple1.jpg|菠萝";
    $str = file_get_contents("data.txt");
    // 使用explode方法进行字符串的拆分。这个方法可以拆分指定的字符串，并将拆分的结构存储到数组并返回
    $value = explode("|",$str);?>
    <!-- // 根据数据生成对应的结构 -->
    <li>
        <img src="<?php echo $value[0] ?>" alt="">
        <a href="#"><?php echo $value[1] ?></a>
    </li>

<!-- <script>
    var str = "img/pineapple1.jpg|菠萝";
    console.log(str.split("|"));
</script> -->