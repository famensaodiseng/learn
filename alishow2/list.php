<?php
require_once 'config.php';
require_once 'function.php';
// 因为function.php依赖于config，所以必须引入


// 根据分类ID对文章进行查询，动态生成文章列表
// 1.获取分类id,
// 根据id查询数据库
// 动态生成结构


  // 获取分类id
//   $categoryId = $_GET['categoryId'];
//   // 根据分类id查询数据库
//   // 链接数据库
// $connect = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
// $sql = "SELECT p.title,p.created,p.content,p.views,p.likes,p.feature,u.nickname,c.`name`,
// (SELECT count(id)FROM comments WHERE comments.post_id = p.id)  commentsCount
// FROM posts p

// LEFT JOIN users u on u.id = p.user_id 
// LEFT JOIN categories c on c.id = p.category_id 
// WHERE p.category_id  ={$categoryId}
// LIMIT 10";

//     // 执行查询操作
// $postResult = mysqli_query($connect,$sql);

// $postArr = [];
// while ($row = mysqli_fetch_assoc($postResult)) {
//   $postArr[] = $row;
// }
// print_r($postArr);

// 以下代码是用封装好的数据进行
// 获取分类id
$categoryId = $_GET['categoryId'];
  $connect= connect();
  $sql = "SELECT p.title,p.created,p.content,p.views,p.likes,p.feature,u.nickname,c.`name`,
 (SELECT count(id)FROM comments WHERE comments.post_id = p.id)  commentsCount
FROM posts p

LEFT JOIN users u on u.id = p.user_id 
LEFT JOIN categories c on c.id = p.category_id 
WHERE p.category_id  ={$categoryId}
LIMIT 10";

  $postArr=query($connect,$sql);

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>阿里百秀-发现生活，发现美!</title>
  <link rel="stylesheet" href="static/assets/css/style.css">
  <link rel="stylesheet" href="static/assets/vendors/font-awesome/css/font-awesome.css">
</head>
<body>
  <div class="wrapper">
    <div class="topnav">
      <ul>
        <li><a href="javascript:;"><i class="fa fa-glass"></i>奇趣事</a></li>
        <li><a href="javascript:;"><i class="fa fa-phone"></i>潮科技</a></li>
        <li><a href="javascript:;"><i class="fa fa-fire"></i>会生活</a></li>
        <li><a href="javascript:;"><i class="fa fa-gift"></i>美奇迹</a></li>
      </ul>
    </div>
   <?php include_once 'public/_header.php'; ?>
    <?php include_once 'public/_aside.php'; ?>

    <div class="content">
      <div class="panel new">
        <h3><?php echo $postArr[0]['name'] ?></h3>
        <!-- <div class="entry">
          <div class="head">
            <a href="javascript:;">星球大战：原力觉醒视频演示 电影票68</a>
          </div>
          <div class="main">
            <p class="info">admin 发表于 2015-06-29</p>
            <p class="brief">星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯</p>
            <p class="extra">
              <span class="reading">阅读(3406)</span>
              <span class="comment">评论(0)</span>
              <a href="javascript:;" class="like">
                <i class="fa fa-thumbs-up"></i>
                <span>赞(167)</span>
              </a>
              <a href="javascript:;" class="tags">
                分类：<span>星球大战</span>
              </a>
            </p>
            <a href="javascript:;" class="thumb">
              <img src="static/uploads/hots_2.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="entry">
          <div class="head">
            <a href="javascript:;">星球大战：原力觉醒视频演示 电影票68</a>
          </div>
          <div class="main">
            <p class="info">admin 发表于 2015-06-29</p>
            <p class="brief">星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯</p>
            <p class="extra">
              <span class="reading">阅读(3406)</span>
              <span class="comment">评论(0)</span>
              <a href="javascript:;" class="like">
                <i class="fa fa-thumbs-up"></i>
                <span>赞(167)</span>
              </a>
              <a href="javascript:;" class="tags">
                分类：<span>星球大战</span>
              </a>
            </p>
            <a href="javascript:;" class="thumb">
              <img src="static/uploads/hots_2.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="entry"> 
          <div class="head">
            <a href="javascript:;">星球大战：原力觉醒视频演示 电影票68</a>
          </div>
          <div class="main">
            <p class="info">admin 发表于 2015-06-29</p>
            <p class="brief">星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯</p>
            <p class="extra">
              <span class="reading">阅读(3406)</span>
              <span class="comment">评论(0)</span>
              <a href="javascript:;" class="like">
                <i class="fa fa-thumbs-up"></i>
                <span>赞(167)</span>
              </a>
              <a href="javascript:;" class="tags">
                分类：<span>星球大战</span>
              </a>
            </p>
            <a href="javascript:;" class="thumb">
              <img src="static/uploads/hots_2.jpg" alt="">
            </a>
          </div>
        </div> -->
        <?  foreach ($postArr as  $value) {   ?>
        <div class="entry">
          <div class="head">
            <a href="javascript:;"><?php echo $value['title']?></a>
          </div>
          <div class="main">
            <p class="info"><?php echo $value['nickname'] ?> 发表于 <?php echo $value['created'] ?></p>
            <p class="brief"><?php echo $value['content'] ?></p>
            <p class="extra">
              <span class="reading">阅读(<?php echo $value['views'] ?>)</span>
              <span class="comment">评论(<?php echo $value['commentsCount'] ?>)</span>
              <a href="javascript:;" class="like">
                <i class="fa fa-thumbs-up"></i>
                <span>赞(<?php echo $value['likes'] ?>)</span>
              </a>
              <a href="javascript:;" class="tags">
                分类：<span><?php echo $value['name'] ?></span>
              </a>
            </p>
            <a href="javascript:;" class="thumb">
              <img src="<?php echo $value['feature'] ?>" alt="">
            </a>
          </div>
        </div>
<?php }?>
          <!-- 加载更多的功能 -->

          <div class="loadmore">
            <span class="btn">加载更多</span>
          </div>


      </div>
    </div>
    <div class="footer">
      <p>© 2016 XIU主题演示 本站主题由 themebetter 提供</p>
    </div>
  </div>
</body>
<script src="static/assets/vendors/jquery/jquery.js"></script>
<script>
  $(function(){
    //定义一个变量，记录是第几次获取数据
    var currentPage = 1;

    //给加载更多的按钮注册点击事件
      $('.loadmore .btn').on("click",function(){

       
        // alert('l');
        //获取文章的分类id
        var categoryId = location.search.split("=")[1];
        // 每次点击更多的，都是获取下一次数据
        currentPage++;
        $.ajax({
          url:'api/_getMorePost.php',
          type:'POST',
          data:{categoryId:categoryId,currentPage:currentPage,pageSize:10},
          success:function(res){
            // console.log(res);
            // 判断该次请求有没有数据
            if(res.code ==1){
              //遍历数据，动态生成结构
              var data = res.data;
              $.each(data,function(index,val){
                var str= '<div class="entry">\
          <div class="head">\
            <a href="javascript:;">'+ val['title']+'</a>\
          </div>\
          <div class="main">\
            <p class="info">'+ val['nickname']+' 发表于 '+ val['created']+'</p>\
            <p class="brief">'+ val['content']+'</p>\
            <p class="extra">\
              <span class="reading">阅读('+ val['views']+')</span>\
              <span class="comment">评论('+ val['commentCount']+')</span>\
              <a href="javascript:;" class="like">\
                <i class="fa fa-thumbs-up"></i>\
                <span>赞('+ val['likes']+')</span>\
              </a>\
             <a href="javascript:;" class="thumb">\
              <img src="'+ val['feature']+'" alt="">\
            </a>\
          </div>\
        </div>';

              var entry = $(str);
              console.log(entry);
              entry.insertBefore('.loadmore');
              });
            }
          }
        })

      })
  });


  
</script>
</html>

