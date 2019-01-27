<?
    header('Content-type:text/html;charset:utf-8');
    $conn = mysqli_connect("localhost","root","root","demo");

    if(!$conn){
        die('连接失败');
    }

    $sql = "update mytable set name = '嘿嘿嘿' where id = 5";

    $res = mysqli_query($conn,$sql);

    var_dump($res);

    if ($res) {
        echo '修改成功';
    } else {
        echo "修改失败";
    }
?>