/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-11-04 14:04:59
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-12 09:41:34
 */
// 引入express框架
const express = require("express");
// 路径处理模块
const path = require("path");
// 向其他服务器端请求数据的模块
const request = require("request");
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, "public")));

app.get("/server", (req, res) => {
  request("http://localhost:3001/cross", (err, response, body) => {
    res.send(body);
  });
});

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log("服务器启动成功");
