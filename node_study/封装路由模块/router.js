/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-13 14:46:30
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-13 16:15:57
 */

//路由模块
// module.exports = function(app) {
//   app.get("/", function(req, res) {
//     res.send("嘿嘿");
//   });
// };
//这么写不太安全，但是把app也传过去了。谁知道你去干啥，所以不安全。

//采用下面的这种方式。
//1创建一个router对象
let express = require("express");
let router = express.Router();
let handler = require("./handler.js");
//通过router对象设置挂载路由
router.get("/", handler.index);
router.get("/index", handler.index);
//app.use("/",function(req,res){
//})
// 和下面的一样
// app.ues(function(req, res) {});
//返回router
module.exports = router;
