/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-10 09:40:11
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-10 09:46:25
 */
const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");

let json = fs.readFileSync(path.join(__dirname, "./userInfo.json5"), "utf-8");
console.log(json);
var obj = JSON5.parse(json);
console.log(obj);
