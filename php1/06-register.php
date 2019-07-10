<?php
function register()
{
    // 验证用户数据是否正确
    if (!isset($_POST["username"]) || trim($_POST["username"]) === "") {
        echo "请输入姓名";
        return;
    }
    if (!isset($_POST["nickname"]) || trim($_POST["nickname"]) === "") {
        echo "请输入昵称";
        return;
    }
    if (empty($_FILES) || $_FILES["photo"]["error"] != 0) {
        echo "图片上传失败";
        return;
    }

    //图片上传失败
    $pciName = $_FILES["photo"]["name"];
    $ext = strrchr($pciName, '.');
    $finaName = time() . rand(1000, 9999) . $ext;
    $_POST[] = $finaName;
    print_r($_POST);

    $str = implode($_POST,"|");
    // echo $str;
    // 将数据写入文件
    file_put_contents("data.txt",$str."\n",FILE_APPEND);


}


//数据的写入


//实现图片上传功能



if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // print_r($_POST);
    register();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="./css/form.css">
</head>

<body>
    <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="post" enctype="multipart/form-data">
        姓名：<input type="text" name="username">
        昵称：<input type="text" name="nickname">
        年龄：<input type="text" name="age">
        电话：<input type="text" name="tel">
        性别：<input type="radio" name="gender" value="男" checked>男
        <input type="radio" name="gender" value="女">女
        <br>
        班级：<select name="class">
            <option value="1">黑马1期</option>
            <option value="2">黑马2期</option>
            <option value="3">黑马3期</option>
        </select>
        头像： <input type="file" name="photo">
        <input type="submit" value="添加信息">
    </form>
</body>

</html>