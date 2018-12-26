var http = require('http');

var server = http.createServer();


server.on('request',function(req,res){
    res.write('你好')
    console.log('哈哈哈');
    res.end();
})


server.listen(8080,function(){
    console.log('服务器启动了，请访问：http://localhost:8080');
})