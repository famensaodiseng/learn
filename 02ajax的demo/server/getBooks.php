<?php 
    header("Content-Type:text/xml;");//这里设置响应头信息，保证浏览器可以把相应内容识别为xml文件类型

    $arr = array();
    $arr[0] = array("name"=>"三国演义","author"=>"罗贯中","desc"=>"一个杀伐纷争的年代");
    $arr[1] = array("name"=>"水浒传","author"=>"施耐庵","desc"=>"108条好汉的故事");
    $arr[2] = array("name"=>"西游记","author"=>"吴承恩","desc"=>"佛教与道教斗争");
    $arr[3] = array("name"=>"红楼梦","author"=>"曹雪芹","desc"=>"一个封建王朝的缩影");
 ?>
<?xml version="1.0" encoding="utf-8" ?>
<booklist>
    <?php 
        foreach ($arr as $key => $value) {
    ?>
    <book>
        <name><?php echo $value['name'] ?></name>
        <author><?php echo $value['author'] ?></author>
        <desc><?php echo $value['desc'] ?></desc>
    </book>
    <?php 
        }
     ?>
</booklist>