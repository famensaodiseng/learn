var http = require("http");
// requre的意思就是引包

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
    res.end("哈哈哈，这是我的第一个界面");
});
server.listen(3000,"127.0.0.1");

// 浏览器属于前端环境
