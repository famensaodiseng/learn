const http = require('http')
const template = require('art-template')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url

    if(url  === '/') {
    const htmlstr =     template(path.join(__dirname,'/views/1.html'),{
        name:'zs',age:'22',body :['吃饭','唱歌','跳舞']
    })
            res.end(htmlstr)
    }
})
server.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000');
})