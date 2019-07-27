
const http = require('http')

const server = http.createServer()


server.on('request',function(req,res){
    res.end('hello world')
})

server.listen(8888,function(){
    console.log('server running at http://127.0.0.1:8888');
    
})