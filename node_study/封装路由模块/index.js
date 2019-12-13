/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-13 13:28:02
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-13 15:13:20
 */
let express = require("express");
let config = require("./config.js");
let router = require("./router.js");
let app = express();

//注册路由
app.use("/", router);
app.listen(config.port, function() {
  console.log("http://localhost" + config.port);
});
