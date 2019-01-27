<?
header('Content-type:text/html;charset=utf-8');

$conn = mysqli_connect("localhost", "root", "root", "demo");

if (!$conn) {
    die('连接失败');
}

$sql = "select * from mytable";

$res = mysqli_query($conn, $sql);

var_dump($res);

if ($res) {
    echo '查询成功';
} else {
    echo "查询失败";
}
?>