/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-13 16:46:47
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-13 16:55:10
 */
var http = require("http");
http
  .createServer(function(req, res) {
    //实现弹框下载功能（核心思想:设置响应的响应报文头）
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", "attachment;filename=readme.txt");
    //告诉浏览器，进行弹框下载，这个附件的名字叫demo.txt
    res.end("hello world");
  })
  .listen(9000, function() {
    console.log("http://localhost:9000");
  });
