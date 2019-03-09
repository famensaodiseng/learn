const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    res.end('ok11321')

})
server.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000');
})