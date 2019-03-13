const express = require('express')

const app = express()

const router = require('./router')

app.use(router)




app.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000')
    
})