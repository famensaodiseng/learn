<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="form-get.php" method="get">
        用户名：<input type="text" name="uname"> <br>
        密码： <input type="password" name="upwd"> <br>
        <input type="submit" value="提交">

    </form>
</body>

</html>
<?php
// print_r($_GET);
echo"我的名字是" . $_GET['a'] . "我的密码是" . $_GET["upwd"]
?>