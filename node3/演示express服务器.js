//导入express

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('node真棒')
})

app.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000');
    
})