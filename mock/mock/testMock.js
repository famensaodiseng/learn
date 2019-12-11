/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-09 21:38:29
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-10 09:37:46
 */
const Mock = require("mockjs");
let id = Mock.mock("@id");
console.log(id);

let obj = Mock.mock({
  id: "@id"
});
console.log(obj);

let obj1 = Mock.mock({
  username: "@cname()",
  date: "@date()",
  yft: "@clast()",
  name: "@name()",
  region: "@region()",
  email: "@email()",
  description: "@paragraph()",
  id: "@ip()",
  avgtar: "@image('200x100', '#ffcc33', '#FFF', 'png','杨方涛')"
});
console.log(obj1);
