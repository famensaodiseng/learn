const http = require('http')


const server =http.createServer()

server.on('request',function(req,res){
    // console.log(req.url);
    const url = req.url 
    res.writeHeader(200,{
        'Content-Type':'text/html; charset=utf-8'
    })
    if (url === '/' || url === '/index.html') {
        res.end('<h3>首页</h3>')
    } else if (url === '/movie.html') {
        res.end('<h3>电影</h3>')
    } else if (url === '/about.html') {
        res.end('<h3>关于我</h3>')
    } else {
        res.end('<h3>未满十八请关闭</h3>')
    }
})

server.listen(3000,function(){
    console.log('server running at http://127.0.0.1:3000')
})