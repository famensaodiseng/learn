const http = require('http')


const server =http.createServer()

server.on('request',function(req,res){
    // console.log(req.url);
    const url = req.url 
    res.writeHeader(200,{
        'Content-Type':'text/plain; charset=utf-8'
    })
    if (url === '/' || url === '/index.html') {
        res.end('首页')
    } else if (url === '/movie.html') {
        res.end('电影')
    } else if (url === '/about.html') {
        res.end('关于我')
    } else {
        res.end('请求的网址不存在')
    }
})

server.listen(3000,function(){
    console.log('server running at http://127.0.0.1:3000')
})