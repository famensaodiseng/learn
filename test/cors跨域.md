### 聊一下CORS


#### CORS其实出现时间不短了，它在维基百科上的定义是：跨域资源共享（CORS ）是一种网络浏览器的技术规范，它为Web服务器定义了一种方式，允许网页从不同的域访问其资源。而这种访问是被同源策略所禁止的。CORS系统定义了一种浏览器和服务器交互的方式来确定是否允许跨域请求。 它是一个妥协，有更大的灵活性，但比起简单地允许所有这些的要求来说更加安全。

CORS与JSONP相比，无疑更为先进、方便和可靠。

- JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。
- 使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理。
- JSONP主要被老的浏览器支持，它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS

[阿里云链接](https://yq.aliyun.com/articles/69313) 
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
[阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)

