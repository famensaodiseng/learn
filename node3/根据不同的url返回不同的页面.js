const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()


server.on('request',(req,res)=>{
     const url = req.url
    
     if (url === './' || url === '/index.html') {
        //返回首页
        // 使用fs模块，读取首页文件
        fs.readFile(path.join(__dirname,'./views/index.html'),'utf-8',(err,datastr)=> {
            res.end(datastr);
        })
     }else if (url === '/about.html') {
        //返回关于我
         fs.readFile(path.join(__dirname, './views/about.html'), 'utf-8', (err, datastr) => {
             res.end(datastr);
         })
     } else if (url === '/movie.html') {
        //返回电影页面
         fs.readFile(path.join(__dirname, './views/movie.html'), 'utf-8', (err, datastr) => {
             res.end(datastr);
         })
     } else if (url === '/css/test1.css') {
         fs.readFile(path.join(__dirname, './css/test1.css'), 'utf-8', (err, datastr) => {
             res.end(datastr);
         })
     }
     else if (url === '/js/test1.js') {
         fs.readFile(path.join(__dirname, './js/test1.js'), 'utf-8', (err, datastr) => {
             res.end(datastr);
         })
     }
})

server.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000');
    
})



