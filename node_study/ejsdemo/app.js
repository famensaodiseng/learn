/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-13 16:25:34
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-13 16:42:17
 */
//加载ejs
let ejs = require("ejs");
// let path = require("path");
let html = "<h1><%= username %></h1>";

let result = ejs.render(html, { username: "张三" });

console.log(result);
