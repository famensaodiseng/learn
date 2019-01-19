<?php
   // $arr = array(1,4,5,53,'abd');

    // echo $arr[2];

    //遍历数组
    // for ($i=0; $i<count($arr);$i++) {
    //     echo $arr[$i].'';
    // }
//     $arr = array(
//         "name" => "jack",
//         "age" => 20,
//         "gender" => true
// );
//     //获取关联数组中的成员。通过key来获取数组中的成员。
//     //echo $arr['name'];

//     //print_r($arr);
//     foreach ($arr as $key => $value) {
//         # code...
//         echo $key.":".$value.'<br>';
//     }

        $arr= array(
            "first"=>array(
                'name'=>'杰克',
                'age'=>20
            ),
            "two"=>array(
                "name"=>"鹿班",
                'age'=>23
            )
            );
        foreach ($arr as $key => $value) {
            foreach ($value as $one => $onevalue) {
                # code...
                echo $one.":".$onevalue.'<br>';
            }
        }
?>