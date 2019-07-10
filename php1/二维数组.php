<?php
    $arr = array(
        array(
            "name" => "jack",
            "age" =>  20 
        ),
        array(
            "name" => "rose",
            "age" =>  18 
        )
    );
    
    // print_r($arr);
    foreach ($arr as $key => $value) {
        foreach ($value as $subkey => $subvalue) {
        echo $subkey .":".$subvalue."<br>" ;
        }
    }
?>