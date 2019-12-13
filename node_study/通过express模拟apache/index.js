/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-13 13:28:02
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-13 14:25:04
 */

//通过express模拟apache
let express = require("express");
let path = require("path");
let app = express();

//处理静态资源的方法
let fn = express.static(path.join(__dirname, "public"));
// "/"这里的仅仅叫做虚拟路径。
app.use("/", fn);
app.listen(8888, function() {
  console.log("http://localhost:8888");
});
