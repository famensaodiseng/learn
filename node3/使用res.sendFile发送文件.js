const express = require('express')
const path = require('path')
const app = express()


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/1.html'))
})


app.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000')
    
})