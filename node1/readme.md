<!--
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-11-21 13:01:51
 * @github: famensaodiseng
 * @LastEditTime: 2019-11-21 13:25:37
 -->

express 是后台的一个框架
原生 node 有很多不顺手的地方

- 呈递静态页面不方便，需要处理每一个 http 请求。
- 路由处理代码不直观清晰
- 不能集中精力写业务

#### 安装 express

写一个服务器

```javascript
var express = require("express");
var app = express();
app.get("/", function(req, res) {
  res.send("hello world");
});

// 这是yft页面
app.get("/yft", function(req, res) {
  res.send("这是yft页面");
});
app.listen(3000);
```

所谓的中间件：就是路由，get,post 这些东西。
匹配上第一个以后，就不往后匹配了。
