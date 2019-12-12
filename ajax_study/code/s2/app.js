/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-11-04 14:05:00
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-12 10:51:51
 */
// 引入express框架
const express = require("express");
// 路径处理模块
const path = require("path");
// 创建web服务器;
const app = express();
// 静态资源访问服务功能;
app.use(express.static(path.join(__dirname, "public")));
// 监听端口;

app.get("/test", (res, req) => {
  const result = "fn({name:张三})";
  res.send(result);
});
app.get("/better", (res, req) => {
  //接受客户端的
  const fnName = req.query.callback;
  const result = fnName + "fn({name:李四})";
  res.send(result);
});
app.listen(3001);
// 控制台提示输出;
console.log("服务器启动成功");
