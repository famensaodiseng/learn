<?php
    //在phpz中文件上传之后都存储在$_FILEs中
    if(!empty($_FILES)){
    // print_r($_FILES);
    //使用函数来实现文件的移动
    $type = $_FILES["myfile"]["type"];
    if (strpos($type,'image/') === 0){
        $filename = $_FILES['myfile']['name']; 
        //获取当前文件的扩展名
        $extension = strrchr($filename,".");
        $myname  = time().rand(1000,9999).$extension;
        move_uploaded_file($_FILES["myfile"]["tmp_name"], "./upload/".$myname);
    } else {
        echo '你选择的不是图片';
    }
   
    }
    
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
    <!-- 在php中文件上传必须是post -->
    <form action="file.php" method="post" 
    <?php echo $_SERVER['PHP_SELF']?>  enctype="multipart/form-data"     >
        文件选择：<input type="file" name="myfile" accept=".jpg,.png""><br>
        <input type="submit" value="提交">

    </form>
</body>
</html>