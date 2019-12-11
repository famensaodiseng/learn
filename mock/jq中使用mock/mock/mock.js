/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-10 10:23:16
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-10 10:26:58
 */
if (MOCK == "true") {
  Mock.mock("/user/userinfo", "get", {
    id: "@id()", //得到随机的id,对象
    username: "@cname()", //随机生成中文名字
    date: "@date()", //随机生成日期
    avatar: "@image('200x200','red','#fff','avatar')", //生成图片,参数:size, background, foreground, text
    description: "@paragraph()", //描述
    ip: "@ip()", //IP地址
    email: "@email()" //email
  });
}
