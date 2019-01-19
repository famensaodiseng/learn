<?php
// $age = 12;
// if ($age > 18) :
//     echo '可以看电影';
//  else :
//     echo '回家玩泥巴';
// endif;

    $score = 30;
    if($score >=90):
        echo 'A';
    elseif($score >=80):
        echo 'B';
    elseif ($score >= 80) :
    echo 'C';
    else:
    echo 'F';    
    endif;

    //PHP中的常亮、
    define("PI",3.14,false);
    echo PI;
    echo pi; //默认不支持小写了。因为前面写了false。

    


?>