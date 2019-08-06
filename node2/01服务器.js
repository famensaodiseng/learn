const http = require('http')


const server = http.createServer()

server.on("request",function(req,res){
    console.log('哈哈');
    res.end('这是服务器返回的数据');
    
})
server.listen(3000,function(){
    console.log('服务器已经启动了')
    
})