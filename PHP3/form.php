<?php 
    print_r($_GET)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo $_SERVER["PHP_SELF"]?>" method="get">
        用户名：<input type="text" name="username"> <br>

        密码：  <input type="password" name="password" ><br>
        <input type="radio" name="sex" value="男"> 男
        <input type="radio" name="sex" value="女"> 女
        提交:   <input type="submit" value="提交">

    </form>
</body>
</html>