//引入express
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    //send()
    res.send('hello express')
})

app.get('/list', (req, res) => {
    res.send({
        name: '张三',
        age: 20,
        gender: '男'
    })

})

app.listen(3000);
console.log('服务器开启成功');