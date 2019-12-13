/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-13 13:28:02
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-13 14:06:00
 */

// 实现了一个基本的helloworld
//加载express模块
let express = require("express");

let app = express();
//创建一个app对象
//通过中间件监听指定的路由
app.get("/index", function(req, res) {
  //   res.end("hello word");
  res.send("Hello world");

  //res.send支持多种类型的参数。
});
app.get("/", function(req, res) {
  //   res.end("hello word");
  res.send("index");

  //res.send支持多种类型的参数。
});
app.use("/bb", function(req, res) {
  //   res.end("hello word");
  res.send("bb");

  //什么请求都可以,只要第一路径对着就可以。
});
// app.post("/", function(req, res) {
//   res.send("Got a POST request");
// });//为什么报错呢，因为url里面都是get请求
// app.all("/all", function(req, res) {
//   res.send("all");
// });

//通过req.params获取路由中的参数
app.get("/news/:year/:month/:day", function(req, res) {
  res.send(req.params);
});
app.listen(8001, function() {
  console.log("http://localhost:8001");
});
