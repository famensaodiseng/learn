<?php
    require_once '../config.php';
    require_once '../function.php';
    // 根据文章的分类id对数据进行更多的获取

    // SELECT * FROM posts
    // LIMIT 0 ，10
    // --第一次获取十条数据
    // LIMIT 10 ,10
    // --这是第二次获取
    // SELECT * FROM posts
    // LIMIT(n - 1) * 10, 10

    // 分析得出：还要知道当前是第几次获取，一共要获取多少条。

    // 1.获取分类的id,第几次获取数据，一共要获取多少条。
    // 2.到数据库中查找对应的数据
    // 3.把数据返回给前台，让其生成结构


    // 获取必要的参数
    $categoryId = $_POST["categoryId"];
    $currentPage = $_POST["currentPage"];
    $pageSize = $_POST["pageSize"];
    $offset = ($currentPage -1) * $pageSize;
    // 查询数据库

    $connect = connect();

    $sql = "SELECT p.title,p.created,p.content,p.views,p.likes,p.feature,u.nickname,c.`name`,
    (SELECT count(id)FROM comments WHERE comments.post_id = p.id)  commentsCount
    FROM posts p

    LEFT JOIN users u on u.id = p.user_id 
    LEFT JOIN categories c on c.id = p.category_id 
    WHERE p.category_id  ={$categoryId}
    LIMIT {$offset},{$pageSize}";
    $postArr =  query($connect,$sql);

    $response = ["code" =>0,"msg"=>"操作失败"];
    if ($postArr) {
        $response["code"]=1;
        $response["msg"]="操作成功";
        $response["date"] =$postArr;
    }
    header("content-type:application/json;charset=utf-8;");
    echo json_encode($response);

?>