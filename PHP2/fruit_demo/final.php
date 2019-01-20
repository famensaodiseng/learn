<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="header">
        传智网上水果超市
    </div>
    <div class="container">
        <p>
            <a href="javascript:;">水果</a>
            <a href="javascript:;">干果</a>
            <a href="javascript:;">蔬菜</a>
        </p>
        <ul>
            <?php
                $arr = array(
                    array(
                        "src"=> "img/banana1.jpg",
                        "name" => "香蕉"
                    ),
                    array(
                        "src"=>"img/apple1.jpg",
                        "name"=> "苹果"
                    ),
                    array (
                        "src" =>"img/orange1.jpg",
                        "name"=>"橘子"
                    )
                );
                foreach ($arr as  $value) { ?>
                    <!-- print_r($value); -->
                    <li>
                        <img src="<?php  echo $value['src'] ?>" alt="">
                        <a href="#"><?php  echo $value['name']?></a>
                    </li>
            <?php    }
            ?>
            <!-- <li>
                <img src="img/banana1.jpg" alt="">
                <a href="#">香蕉</a>
            </li>
            <li>
                <img src="img/apple1.jpg" alt="">
                <a href="#">苹果</a>
            </li>
            <li>
                <img src="img/orange1.jpg" alt="">
                <a href="#">橘子</a>
            </li>
            <li>
                <img src="img/pineapple1.jpg" alt="">
                <a href="#">菠萝</a>
            </li>
            <li>
                <img src="img/mango1.jpg" alt="">
                <a href="#">芒果</a>
            </li>
            <li>
                <img src="img/grape1.jpg" alt="">
                <a href="#">葡萄</a>
            </li>
            <li>
                <img src="img/pomelo1.jpg" alt="">
                <a href="#">柚子</a>
            </li>
            <li>
                <img src="img/pawpaw1.jpg" alt="">
                <a href="#">木瓜</a>
            </li>
            <li>
                <img src="img/kivi1.jpg" alt="">
                <a href="#">猕猴桃</a>
            </li>
            <li>
                <img src="img/persimmon1.jpg" alt="">
                <a href="#">柿子</a>
            </li>
            <li>
                <img src="img/lemon1.jpg" alt="">
                <a href="#">柠檬</a>
            </li>
            <li>
                <img src="img/pomegranate1.jpg" alt="">
                <a href="#">石榴</a>
            </li>
            <li>
                <img src="img/pear1.jpg" alt="">
                <a href="#">梨</a>
            </li>
            <li>
                <img src="img/strawberry1.jpg" alt="">
                <a href="#">草莓</a>
            </li>
            <li>
                <img src="img/blueberry1.jpg" alt="">
                <a href="#">蓝莓</a>
            </li>
            <li>
                <img src="img/waxberry1.jpg" alt="">
                <a href="#">杨莓</a>
            </li>
            <li>
                <img src="img/peach1.jpg" alt="">
                <a href="#">桃</a>
            </li>
            <li>
                <img src="img/coconut1.jpg" alt="">
                <a href="#">椰子</a>
            </li>
            <li>
                <img src="img/apricot1.jpg" alt="">
                <a href="#">杏</a>
            </li>
            <li>
                <img src="img/cherry1.jpg" alt="">
                <a href="#">樱桃</a>
            </li> -->
        </ul>
    </div>
    <div class="footer">
        传智播客 版权所有
    </div>
</body>
</html>