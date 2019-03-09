const http = require('http');

const server = http.createServer()

server.on('request',function(req,res){
    //可以通过request事件来监听处理客户端的请求
    res.end('hello world')
})

server.listen(3000,'127.0.0.1',function(){
    console.log('server running at http://127.0.0.1:3000');
    
})


